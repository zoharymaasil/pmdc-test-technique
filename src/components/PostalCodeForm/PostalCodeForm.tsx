/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
const codesPostaux = require('codes-postaux');

import {
  PostalCodeFormWrapper,
  Title,
  FormInput,
  Button
} from './PostalCodeForm.styles';

const PostalCodeForm = () => {
  const initTItle: string = 'Recevez les règles d\'urbanisme pour votre ville!';

  const [postalCode, setPostalCode] = useState<string>('');
  const [title, setTitle] = useState<string>(initTItle);

  const getMatchingCity = () => {
    const res = codesPostaux.find(postalCode);
    setTitle(res && res[0] ? `Le guide de l'urbanisme à ${res[0].nomCommune}` : initTItle);
  };

  return (
    <PostalCodeFormWrapper>
      <Title>{title}</Title>
      <FormInput>
        <label>Votre code postal :</label>
        <input type="text" value={postalCode} onChange={(e: any) => setPostalCode(e.target.value)} />
      </FormInput>
      <Button type="button" title="Valider" onClick={() => getMatchingCity()}>Valider</Button>
      </PostalCodeFormWrapper>
  );
};

export default PostalCodeForm;
