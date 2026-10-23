import { inputMock, outputMock, testWhenImplemented, uppgift4, getCombinedOutput } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks()
})

testWhenImplemented('[Uppgift 4] 4, 3, 101, 91, 5', uppgift4, async () => {
  inputMock
    .mockResolvedValueOnce(5)
    .mockResolvedValueOnce(91)
    .mockResolvedValueOnce(101)
    .mockResolvedValueOnce(3)
    .mockResolvedValueOnce(4)

  await uppgift4();

  expect(outputMock).toHaveBeenCalled();
  expect(getCombinedOutput()).toBe("43101915");
});