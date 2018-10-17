var app = new Vue({
  el: '#app',
  data: {
	// Константы
    CLASSES_COUNT_MAX: 45,
    ONE_CLASS_PRICE: 1000,
    COLORED_PRICE: 500,
    UKRAINE_PRICE: 6000,
	FEW_APPLICANTS_COEF: 1.3,
	
	classesCount: 1,
	colored: 0,
	ukraine: 0,
	fewApplicants: 0
  },
  computed: {
    totalPrice: function () {
      var result = this.classesCount * 1000;
	  if (this.colored) {
        result += this.COLORED_PRICE;
	  }
	  if (this.ukraine) {
        result += this.UKRAINE_PRICE;
	  }
	  if (this.fewApplicants) {
        result *= this.FEW_APPLICANTS_COEF;
	  }
	  return result;
    },
	
    fewApplicantsPerc: function () {
      return this.FEW_APPLICANTS_COEF * 100;
    }
  }
})