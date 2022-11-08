export const hashFun = (secret: string) => {
  const charGen: number[] = [];
  secret.split('').reduce((hash, char) => {
    switch (char) {
      case 'a':
        hash = hash + 1;
        break;
      case 'b':
        hash = hash + 2;
        break;
      case 'c':
        hash = hash + 3;
        break;
      case 'd':
        hash = hash + 4;
        break;
      case 'e':
        hash = hash + 5;
        break;
      case 'f':
        hash = hash + 6;
        break;
      case 'g':
        hash = hash + 7;
        break;
      case 'h':
        hash = hash + 8;
        break;
      case 'i':
        hash = hash + 9;
        break;
      case 'j':
        hash = hash + 10;
        break;
      case 'k':
        hash = hash + 11;
        break;
      case 'l':
        hash = hash + 12;
        break;
      case 'm':
        hash = hash + 13;
        break;
      case 'n':
        hash = hash + 14;
        break;
      case 'o':
        hash = hash + 15;
        break;
      case 'p':
        hash = hash + 16;
        break;
      case 'q':
        hash = hash + 17;
        break;
      case 'r':
        hash = hash + 18;
        break;
      case 's':
        hash = hash + 19;
        break;
      case 't':
        hash = hash + 20;
        break;
      case 'u':
        hash = hash + 21;
        break;
      case 'v':
        hash = hash + 22;
        break;
      case 'w':
        hash = hash + 23;
        break;
      case 'x':
        hash = hash + 24;
        break;
      case 'y':
        hash = hash + 25;
        break;
      case 'z':
        hash = hash + 26;
        break;
      case 'A':
        hash = hash + 27;
        break;
      case 'B':
        hash = hash + 28;
        break;
      case 'C':
        hash = hash + 29;
        break;
      case 'D':
        hash = hash + 30;
        break;
      case 'E':
        hash = hash + 31;
        break;
      case 'F':
        hash = hash + 32;
        break;
      case 'G':
        hash = hash + 33;
        break;
      case 'H':
        hash = hash + 34;
        break;
      case 'I':
        hash = hash + 35;
        break;
      case 'J':
        hash = hash + 36;
        break;
      case 'K':
        hash = hash + 37;
        break;
      case 'L':
        hash = hash + 38;
        break;
      case 'M':
        hash = hash + 39;
        break;
      case 'N':
        hash = hash + 40;
        break;
      case 'O':
        hash = hash + 41;
        break;
      case 'P':
        hash = hash + 42;
        break;
      case 'Q':
        hash = hash + 43;
        break;
      case 'R':
        hash = hash + 44;
        break;
      case 'S':
        hash = hash + 45;
        break;
      case 'T':
        hash = hash + 46;
        break;
      case 'U':
        hash = hash + 47;
        break;
      case 'V':
        hash = hash + 48;
        break;
      case 'W':
        hash = hash + 49;
        break;
      case 'X':
        hash = hash + 50;
        break;
      case 'Y':
        hash = hash + 51;
        break;
      case 'Z':
        hash = hash + 52;
        break;
      case '0':
        hash = hash + 53;
        break;
      case '1':
        hash = hash + 54;
        break;
      case '2':
        hash = hash + 55;
        break;
      case '3':
        hash = hash + 56;
        break;
      case '4':
        hash = hash + 57;
        break;
      case '5':
        hash = hash + 58;
        break;
      case '6':
        hash = hash + 59;
        break;
      case '7':
        hash = hash + 60;
        break;
      case '8':
        hash = hash + 61;
        break;
      case '9':
        hash = hash + 62;
        break;
      case ' ':
        hash = hash + 63;
        break;
      case '!':
        hash = hash + 64;
        break;
      case '"':
        hash = hash + 65;
        break;
      case '#':
        hash = hash + 66;
        break;
      case '$':
        hash = hash + 67;
        break;
      case '%':
        hash = hash + 68;
        break;
      case '&':
        hash = hash + 69;
        break;
      case "'":
        hash = hash + 70;
        break;
      case '(':
        hash = hash + 71;
        break;
      case ')':
        hash = hash + 72;
        break;
      case '*':
        hash = hash + 73;
        break;
      case '+':
        hash = hash + 74;
        break;
      case ',':
        hash = hash + 75;
        break;
    }
    charGen.push(hash);
    return hash & hash;
  }, 0);
  let genVal = charGen.reduce((preValue, nextValue) => preValue * nextValue);
  let min = 100;
  let max = 100000;
  if (genVal > max) {
    genVal = genVal % max;
  }
  if (genVal < min) {
    genVal = genVal + min;
  }
  return parseInt(genVal.toString(2));
};
