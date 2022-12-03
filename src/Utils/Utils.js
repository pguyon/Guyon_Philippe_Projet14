/* A regular expression that is used to check if the input is valid. */
export const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\d\- _]*$/;

/**
 * If the length of the value is greater than 0, return true, otherwise return false.
 * @param value - The value of the input field
 * @returns A function that takes a value and returns a boolean.
 */
export const lengthIsValid = (value) => {
  return value.length > 0;
};

/**
 * If the length of the value is valid and the value matches the regex, then return true, otherwise
 * return false.
 * @param value - The value of the input field
 * @returns A function that takes a value and returns a boolean.
 */
export const textIsValid = (value) => {
  return lengthIsValid(value) && value.match(regex);
};

/**
 * If the value is less than 2 characters, return an error message. If the value doesn't match the
 * regex, return an error message. Otherwise, return nothing.
 * @param value - the value of the input
 * @returns A function that returns a JSX element.
 */
export const errorTextMessage = (value) => {
  if (value.length < 2) {
    return <p className="error">2 characters minimum</p>;
  }
  if (!value.match(regex)) {
    return <p className="error">Unauthorized characters</p>;
  }
};

/**
 * If the value is empty, return a paragraph with the class name "error" and the text "Required".
 * @param value - the value of the input
 * @returns A function that returns a JSX element.
 */
export const errorEmptyMessage = (value) => {
  if (value.length === 0) {
    return <p className="error">Required</p>;
  }
};

/**
 * If date1 is greater than or equal to date2, return an error message.
 * @param date1 - the date of birth
 * @param date2 - the date of birth
 * @returns A React component.
 */
export const compareDate = (date1, date2) => {
  if (date1 >= date2) {
    return (
      <p className="error">Start date must be greater than date of birth</p>
    );
  }
};
