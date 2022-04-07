import React, { useState } from 'react';

const maxLength = 50;
const paragraph =
  'Techopedia Explains Lorem IpsumLorem ipsum is the filler text that typically demonstrates the font and style of a text in a document or visual demonstration. It serves as a place holder indicating where the text will be in the final iteration. Originally from Latin, Lorem ipsum has no intelligible meaning.';

const BooleanDataType = () => {
  const [hidden, setHidden] = useState(true);
  if (paragraph.length <= maxLength) {
    return <p>{paragraph}</p>;
  }
  return (
    <p>
      {hidden ? `${paragraph.substring(0, maxLength).trim()} ...` : paragraph}
      {hidden ? (
        <a onClick={() => setHidden(false)}>Read More</a>
      ) : (
        <a onClick={() => setHidden(true)}>Read Less</a>
      )}
    </p>
  );
};

export default BooleanDataType;
