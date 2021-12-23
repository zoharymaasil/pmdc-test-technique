interface ITag {
  spans: any[];
  text: string;
  type: string;
}

export const renderRichText = (data: any[]) => {
  let result = '';
  
  data && data.map((tag: ITag) => {
    switch (tag.type) {
      case 'heading1': result += `<h1>${tag.text}</h1>`; break;
      case 'heading2': result += `<h2>${tag.text}</h2>`; break;
      case 'heading3': result += `<h3>${tag.text}</h3>`; break;
      case 'heading4': result += `<h4>${tag.text}</h4>`; break;
      case 'heading5': result += `<h5>${tag.text}</h5>`; break;
      case 'heading6': result += `<h6>${tag.text}</h6>`; break;
      default: result += `<p>${tag.text}</p>`; break; break;
    }
  });
  
  return result;
};