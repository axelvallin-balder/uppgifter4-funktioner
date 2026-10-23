type UppgiftFn = () => Promise<void>;

export const outputMock = jest.fn();
export const inputMock = jest.fn();

const NOT_IMPLEMENTED = 'NOT_IMPLEMENTED';

(globalThis as typeof globalThis & { output: jest.Mock }).output = outputMock;
(globalThis as typeof globalThis & { input: jest.Mock }).input = inputMock;

export {
  uppgift1,
  uppgift2,
  uppgift3,
  uppgift4,
  uppgift5,
  uppgift6,
  uppgift7,
  uppgift8,
  uppgift9
} from '../app';

function hasNotImplementedMarker(fn: UppgiftFn): boolean {
  return fn.toString().includes(NOT_IMPLEMENTED);
}

export function testWhenImplemented(
  name: string,
  fnUnderTest: UppgiftFn,
  fn: jest.ProvidesCallback,
) {
  if (hasNotImplementedMarker(fnUnderTest)) {
    test.todo(name);
    return;
  }

  test(name, fn);
}

export function getCombinedOutput(): string {
  return outputMock.mock.calls
    .map((args: unknown[]) => args.map((value: unknown) => String(value ?? '')).join(''))
    .join('')
    .replace(/\s+/g, '')
    .replace(' ', '')
    .trim();
}
