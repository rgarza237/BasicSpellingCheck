"use client";
import React, { useState, useEffect } from 'react';
import nspell from 'nspell';

import affData from '../../node_modules/dictionary-en/index.aff'
import dicData from '../../node_modules/dictionary-en/index.dic'

function SpellChecker() {
    const [spellchecker, setSpellchecker] = useState(null);
    const [inputText, setInputText] = useState('');
    const [misspelledWords, setMisspelledWords] = useState([]);

    useEffect(() => {
      const spell = nspell(affData, dicData);
      setSpellchecker(spell)
    },[]);

    const checkSpelling = () => {
        const words = inputText.split(/\s+/);
        const misspelled = words.filter((word) => spellchecker && !spellchecker.correct(word));
        setMisspelledWords(misspelled);
    };

    return (
        <div className='max-w-2x1 mx-auto p-4'>
            <h1 className='text-3x1 font-semi-bold mb-4'>Spell Checker</h1>
            <textarea
                className='border border-gray-300 rounded p-2 w-full h-32 resize-none text-black'
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text..."
            ></textarea>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600' onClick={checkSpelling}>Check Spelling</button>
            {misspelledWords.length > 0 && (
                <div className='mt-4'>
                    <h2 className='text-xl font-semibold mb-2'>Misspelled Words:</h2>
                    <ul className='list-disc pl-6'>
                        {misspelledWords.map((word, index) => (
                            <li key={index}>{word}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default function Nome() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
       <SpellChecker />
    </div>
  );
}
