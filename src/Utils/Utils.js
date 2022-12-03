 /* A regular expression that is used to check if the input is valid. */
export const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\d\- _]*$/;

export const lengthIsValid =(arg) => {
    return arg.length > 0
}

export const textIsValid = (text) => {
  return lengthIsValid(text) && text.match(regex);
};
