import { inputMock, outputMock, testWhenImplemented, uppgift5, getCombinedOutput } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks()
})

testWhenImplemented('[Uppgift 5] 4, 15, 2', uppgift5, async () => {
  inputMock
    .mockResolvedValueOnce(3)
    .mockResolvedValueOnce(4)
    .mockResolvedValueOnce(15)
    .mockResolvedValueOnce(2)

  await uppgift5();

  expect(outputMock).toHaveBeenCalled();
  expect(getCombinedOutput()).toBe("2154");
});

testWhenImplemented('[Uppgift 5] 7, 1, 86, 442, 172, 19, 31, 2', uppgift5, async () => {
  inputMock
    .mockResolvedValueOnce(7)
    .mockResolvedValueOnce(1)
    .mockResolvedValueOnce(86)
    .mockResolvedValueOnce(442)
    .mockResolvedValueOnce(172)
    .mockResolvedValueOnce(19)
    .mockResolvedValueOnce(31)
    .mockResolvedValueOnce(2)

  await uppgift5();

  expect(outputMock).toHaveBeenCalled();
  expect(getCombinedOutput()).toBe("23119172442861");
});