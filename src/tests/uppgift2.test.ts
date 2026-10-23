import { outputMock, testWhenImplemented, uppgift2 } from './testUtils';

beforeEach(() => {
  jest.clearAllMocks();
});

testWhenImplemented('[Uppgift 2] Räkna till och från 15', uppgift2, async () => {

  await uppgift2();

  expect(outputMock).toHaveBeenCalledTimes(4);
  expect(outputMock).toHaveBeenCalledWith(2);
  expect(outputMock).toHaveBeenCalledWith(19);
  expect(outputMock).toHaveBeenCalledWith(8);
  expect(outputMock).toHaveBeenCalledWith(9);
});