import { inputMock, outputMock, testWhenImplemented, uppgift9 } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks();
});

testWhenImplemented('[Uppgift 9] 120 minuter', uppgift9, async () => {
  inputMock
    .mockResolvedValueOnce('120')

  await uppgift9();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Hela timmar: 2');
  expect(outputMock).toHaveBeenCalledWith('Restminuter: 0');
});

testWhenImplemented('[Uppgift 9] 275 minuter', uppgift9, async () => {
  inputMock
    .mockResolvedValueOnce('275')

  await uppgift9();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Hela timmar: 4');
  expect(outputMock).toHaveBeenCalledWith('Restminuter: 35');
});