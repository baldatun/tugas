var data = [
  ['a','c','b','e','d'],
  ['g','e','f']
  ];

var datalain = [
      ['g','h','i','j'],
  ['a','c','b','e','d'],
  ['g','e','f']
  ];

   const sort_array = (data) => {
      for(let i = 0; i < data.length; i++){
        data[i].sort((a, b) => {
          if(a > b){ return 1;}
          else if(a < b) { return -1; }
          else { return 0; }
        });
      }

      return data.sort((a, b) => a.length - b.length );
  };

  console.log(sort_array(data));
   console.log(sort_array(datalain));