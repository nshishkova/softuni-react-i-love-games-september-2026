import { it, expect, describe } from 'vitest';
import * as calc from '../utils/calUtil.js';

describe('Add operation', () => {
    it('should add numbers correctly', () => {
        //Arrange
        const a = 2;
        const b = 3;
        const expected = 5;

        //Act
        const actual = calc.add(a, b);

        //Assert
        expect(actual).toBe(expected);
    });

    it('should handle adding negative numbers correctly', () => {
        expect(calc.add(-2, -3)).toBe(-5);
    });
});

describe('Subtract operation', () => {
    it('should subtract numbers correctly', () => {
        expect(calc.subtract(5, 3)).toBe(2);
    });
});

describe('Multiply operation', () => {
    it('should multiply numbers correctly', () => {
        expect(calc.multiply(2, 3)).toBe(6);
    });
});

describe('Divide operation', () => {
    it('should divide numbers correctly', () => {
        expect(calc.divide(6, 3)).toBe(2);
    });
});