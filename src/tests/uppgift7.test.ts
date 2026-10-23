import { inputMock, outputMock, testWhenImplemented, uppgift7 } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks();
});

testWhenImplemented('[Uppgift 7] 0910-12345', uppgift7, async () => {
  inputMock
    .mockResolvedValueOnce('0910-12345')

  await uppgift7();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Telefonnummer utan bindestreck: 0910 12345');
});

testWhenImplemented('[Uppgift 7] 08-12345', uppgift7, async () => {
  inputMock
    .mockResolvedValueOnce('08-12345')

  await uppgift7();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Telefonnummer utan bindestreck: 08 12345');
});