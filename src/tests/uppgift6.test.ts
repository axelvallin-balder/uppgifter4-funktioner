import { inputMock, outputMock, testWhenImplemented, uppgift6 } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks();
});

testWhenImplemented('[Uppgift 6] Kalle Ankas användarnamn', uppgift6, async () => {
  inputMock
    .mockResolvedValueOnce('Kalle')
    .mockResolvedValueOnce('Anka');

  await uppgift6();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Ditt användarnamn är kalank.');
});


testWhenImplemented('[Uppgift 6] Örjan Östenssons användarnamn', uppgift6, async () => {
  inputMock
    .mockResolvedValueOnce('Örjan')
    .mockResolvedValueOnce('Östensson');

  await uppgift6();

  expect(outputMock).toHaveBeenCalled();
  expect(outputMock).toHaveBeenCalledWith('Ditt användarnamn är örjöst.');
});