describe('Matching Tests', () => {

  beforeEach(function(){
    matching = new Matching();
  });

  describe('When um is called', () => {

    it('should return the sum', () => {


      // fetch('https://github.com/Mule52/resp_js/blob/master/README.md')
      //   .then(response => response.text())
      //   .then(text => console.log(text));

      Papa.parse('https://github.com/Mule52/resp_js/blob/master/README.md', {
        complete: function(results) {
          console.log(results);
        }
      });

      expect(matching.sum(1, 3)).toEqual(4);
    });

  });

  

});
