// debounce.test.ts
import { debounce } from './debounce';

jest.useFakeTimers();

describe('debounce', () => {
    let callback: jest.Mock;

    beforeEach(() => {
        callback = jest.fn();
    });

    it('should call the callback after the specified delay', () => {
        const debouncedFunc = debounce(callback, 2000);

        debouncedFunc('test');
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(2000);
        expect(callback).toHaveBeenCalledWith('test');
        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should reset the delay if called again within the delay period', () => {
        const debouncedFunc = debounce(callback, 2000);

        debouncedFunc('test1');
        jest.advanceTimersByTime(1000);

        debouncedFunc('test2');
        jest.advanceTimersByTime(1000);
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(1000);
        expect(callback).toHaveBeenCalledWith('test2');
        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should handle multiple calls correctly', () => {
        const debouncedFunc = debounce(callback, 2000);

        debouncedFunc('test1');
        jest.advanceTimersByTime(500);
        debouncedFunc('test2');
        jest.advanceTimersByTime(500);
        debouncedFunc('test3');
        jest.advanceTimersByTime(500);
        debouncedFunc('test4');
        jest.advanceTimersByTime(500);

        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(2000);
        expect(callback).toHaveBeenCalledWith('test4');
        expect(callback).toHaveBeenCalledTimes(1);
    });
});
