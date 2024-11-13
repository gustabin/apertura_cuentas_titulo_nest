import { describe, it, expect, vi, beforeEach } from 'vitest';
import { ItemsService } from './items.service';
import { ValidationService } from './validation.service';

describe('ItemsService with Validation', () => {
    let itemsService: ItemsService;
    let validationService: ValidationService;

    beforeEach(() => {
        validationService = new ValidationService();
        itemsService = new ItemsService(validationService);
    });

    it('should create a new item if valid', () => {
        const validateSpy = vi.spyOn(validationService, 'validate').mockReturnValue(true);
        const newItem = itemsService.create('Valid Item');
        expect(validateSpy).toHaveBeenCalledWith('Valid Item');
        expect(newItem).toHaveProperty('id');
        expect(newItem?.name).toBe('Valid Item');
    });

    it('should not create an item if invalid', () => {
        const validateSpy = vi.spyOn(validationService, 'validate').mockReturnValue(false);
        const newItem = itemsService.create('No');
        expect(validateSpy).toHaveBeenCalledWith('No');
        expect(newItem).toBeNull();
    });
});

describe('ItemsService without ValidationService', () => {
    let itemsService: ItemsService;
    let validationService: ValidationService;

    beforeEach(() => {
        validationService = new ValidationService();
        itemsService = new ItemsService(validationService);
        vi.spyOn(validationService, 'validate').mockReturnValue(true); // Asegura siempre un retorno true para este bloque
    });

    it('should create a new item', () => {
        const newItem = itemsService.create('Item 1');
        expect(newItem).toHaveProperty('id');
        expect(newItem?.name).toBe('Item 1');
    });

    it('should find all items', () => {
        itemsService.create('Item 1');
        itemsService.create('Item 2');
        const items = itemsService.findAll();
        expect(items).toHaveLength(2);
        expect(items[0].name).toBe('Item 1');
    });

    it('should update an existing item', () => {
        const newItem = itemsService.create('Item 1');
        const updatedItem = itemsService.update(newItem!.id, 'Updated Item 1');
        expect(updatedItem).not.toBeNull();
        expect(updatedItem?.name).toBe('Updated Item 1');
    });

    it('should return null when updating a non-existent item', () => {
        const updatedItem = itemsService.update(999, 'Non-existent Item');
        expect(updatedItem).toBeNull();
    });

    it('should delete an item', () => {
        const newItem = itemsService.create('Item 1');
        const result = itemsService.delete(newItem!.id);
        expect(result).toBe(true);
        expect(itemsService.findAll()).toHaveLength(0);
    });

    it('should return false when trying to delete a non-existent item', () => {
        const result = itemsService.delete(999);
        expect(result).toBe(false);
    });
});
