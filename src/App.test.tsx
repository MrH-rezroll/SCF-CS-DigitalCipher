import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import CaesarCipherModel from './model/CaesarCipherModel';

// Caesar Cipher Model Tests
test('Caesar Cipher get message is "hello"', () => {
  const theCaesarCipher = new CaesarCipherModel("hello", 7);
  expect(theCaesarCipher.getTheMessage()).toBe("hello");
});

test('Caesar Cipher can encode whole alphabet, numbers, and special characters', () => {
  const theCaesarCipher = new CaesarCipherModel("abcdefghijklmnopqrstuvwxyz012345678.,?!'", 7);
  theCaesarCipher.setTheEncodedMessage(theCaesarCipher.getTheMessage());
  expect(theCaesarCipher.getTheMessage()).toBe("hijklmnopqrstuvwxyzabcdefg012345678.,?!'");
});

test('Caesar Cipher can decode whole alphabet, numbers, and special characters', () => {
  const theCaesarCipher = new CaesarCipherModel("abcdefghijklmnopqrstuvwxyz012345678.,?!'", 7);
  theCaesarCipher.setTheEncodedMessage(theCaesarCipher.getTheMessage());
  expect(theCaesarCipher.getTheDecodedMessage(theCaesarCipher.getTheMessage())).toBe("abcdefghijklmnopqrstuvwxyz012345678.,?!'");
});

test('Caesar Cipher get key is 7', () => {
  const theCaesarCipher = new CaesarCipherModel("hello", 7);
  expect(theCaesarCipher.getTheCipherKey()).toBe(7);
});

test('Caesar Cipher encodes long message', () => {
  const theCaesarCipher = new CaesarCipherModel("Let's encode some text with a Caesar Cipher!", 7);
  theCaesarCipher.setTheEncodedMessage("Let's encode some text with a Caesar Cipher!");
  expect(theCaesarCipher.getTheMessage()).toBe("Sla'z lujvkl zvtl alea dpao h Jhlzhy Jpwoly!");
});

test('Caesar Cipher set message to "hi" after "hello"', () => {
  const theCaesarCipher = new CaesarCipherModel("hello", 7);
  expect(theCaesarCipher.getTheMessage()).toBe("hello");
  theCaesarCipher.setTheMessage("hi");
  expect(theCaesarCipher.getTheMessage()).toBe("hi");
});

test('Caesar Cipher set key to 8 after 7', () => {
  const theCaesarCipher = new CaesarCipherModel("hello", 7);
  expect(theCaesarCipher.getTheCipherKey()).toBe(7);
  theCaesarCipher.setTheCipherKey(8);
  expect(theCaesarCipher.getTheCipherKey()).toBe(8);
});

test('Caesar Cipher get encoded message "hello" with shift of 7 as "olssv"', () => {
  const theCaesarCipher = new CaesarCipherModel("hello", 7);
  expect(theCaesarCipher.getTheEncodedMessage()).toBe("olssv");
});

test('Caesar Cipher get encoded message "Hello World" with shift of 7 as "Olssv Dvysk" (validating case sensitvity, spaces, alphabet wrapping)', () => {
  const theCaesarCipher = new CaesarCipherModel("Hello World", 7);
  expect(theCaesarCipher.getTheEncodedMessage()).toBe("Olssv Dvysk");
});

test('Caesar Cipher get encode display preview should be "a -> h"', () => {
  const theCaesarCipher = new CaesarCipherModel("Hello World", 7);
  expect(theCaesarCipher.getTheCipherDisplayPreview()).toBe("a -> h");
});

test('Caesar Cipher get encode display preview should be "a -> j"', () => {
  const theCaesarCipher = new CaesarCipherModel("Hello World", 9);
  expect(theCaesarCipher.getTheCipherDisplayPreview()).toBe("a -> j");
});

test('Caesar Cipher set cipher key from base64 encoded cipher key', () => {
  const theCaesarCipher = new CaesarCipherModel("Hello World", 7);
  expect(theCaesarCipher.getBase64EncodedKey()).toBe("Nw==");
});

test('Caesar Cipher set cipher key to 7, then set to 8 from base64 encoded key', () => {
  const theCaesarCipher = new CaesarCipherModel("Hello World", 7);
  theCaesarCipher.setBase64EncodedKey("OA==");
  expect(theCaesarCipher.getTheCipherKey()).toBe(8);
});

test('Caesar Cipher full user process test: Encode a messge, recieve and decode a message', () => {
  const theCaesarCipher = new CaesarCipherModel("Hello World!", 7);
  expect(theCaesarCipher.getTheEncodedMessage()).toBe("Olssv Dvysk!");
  theCaesarCipher.setBase64EncodedKey("OA==");
  expect(theCaesarCipher.getTheCipherKey()).toBe(8);
  expect(theCaesarCipher.getTheDecodedMessage("Pmttw Camz 42.")).toBe("Hello User 42.");
});
