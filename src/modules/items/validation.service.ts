import { Injectable } from '@nestjs/common';
import { ValidationService } from './validation.service';

@Injectable()
export class ValidationService {
    validate(name: string): boolean {
        return name.length > 3;
    }
}
