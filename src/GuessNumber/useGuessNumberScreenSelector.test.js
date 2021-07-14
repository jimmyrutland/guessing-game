import { renderHook, act } from '@testing-library/react-hooks';
import useGuessNumberScreenSelector from './useGuessNumberScreenSelector';

// Tests without view logic
test('should have no userGuess initially', () => {
  const { result } = renderHook(() => useGuessNumberScreenSelector());
  expect(result.current.userGuess).toBe('');
});

test('should have no guessInformation initially', () => {
  const { result } = renderHook(() => useGuessNumberScreenSelector());
  expect(result.current.guessInformation).toBe('');
});

test('should set guessInformation when userGuess changes', () => {
  const { result } = renderHook(() => useGuessNumberScreenSelector());
  act(() => {
    result.current.setUserGuess('3');
  });
  expect(result.current.guessInformation).toBeTruthy();
});

test('should set userGuess to empty string on reset function call', () => {
  const { result } = renderHook(() => useGuessNumberScreenSelector());
  act(() => {
    result.current.setUserGuess('2');
    result.current.resetGame();
  })
  expect(result.current.userGuess).toBe('');
});
