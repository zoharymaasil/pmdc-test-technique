/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
const codesPostaux = require('codes-postaux');

const PostalCodeForm = () => {
  const [postalCode, setPostalCode] = useState<string>('');

  const getMatchingCity = () => {
    const res = codesPostaux.find(postalCode);
    console.debug(res);
  };

  return (
    <div>
      <p>Recevez les règles d'urbanisme pour votre ville!</p>
      <label>Votre code postal</label>
      <input type="text" value={postalCode} onChange={(e: any) => setPostalCode(e.target.value)} />
      <button type="button" title="Valider" onClick={() => getMatchingCity()}>Valider</button>
    </div>
  );
};

export default PostalCodeForm;
