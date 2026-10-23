import { inputMock, outputMock, testWhenImplemented, uppgift1 } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks()
})

testWhenImplemented('[Uppgift 1] Kalle Anka', uppgift1, async () => {
  inputMock
    .mockResolvedValueOnce('Kalle')
    .mockResolvedValueOnce('Anka');

  await uppgift1();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Dina initialer är KA.');
});

testWhenImplemented('[Uppgift 1] Räkna till 0', uppgift1, async () => {
  inputMock
    .mockResolvedValueOnce('Örjan')
    .mockResolvedValueOnce('Östensson');

  await uppgift1();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Dina initialer är ÖÖ.');
});
