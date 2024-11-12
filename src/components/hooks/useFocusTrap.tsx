import { useEffect } from 'react';

export const useFocusTrap = (ref: React.RefObject<HTMLElement>, isActive: boolean) => {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const element = ref.current;
    const focusableElements = element.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };

    // Set initial focus
    firstFocusable?.focus();

    // Add event listener
    element.addEventListener('keydown', handleKeyDown);

    // Store the previously focused element
    const previouslyFocused = document.activeElement;

    return () => {
      element.removeEventListener('keydown', handleKeyDown);
      // Restore focus when unmounting
      (previouslyFocused as HTMLElement)?.focus();
    };
  }, [ref, isActive]);
};