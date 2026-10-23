import { inputMock, outputMock, testWhenImplemented, uppgift8 } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks();
});

testWhenImplemented('[Uppgift 8] 0910-12345', uppgift8, async () => {
  inputMock
    .mockResolvedValueOnce('0910-12345')

  await uppgift8();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Riktnummer: 0910');
  expect(outputMock).toHaveBeenCalledWith('Abonnentnummer: 12345');
});

testWhenImplemented('[Uppgift 8] 08-12345', uppgift8, async () => {
  inputMock
    .mockResolvedValueOnce('08-12345')

  await uppgift8();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Riktnummer: 08');
  expect(outputMock).toHaveBeenCalledWith('Abonnentnummer: 12345');
});