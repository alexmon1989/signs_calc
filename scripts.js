var app = new Vue({
  el: '#app',
  data: {
	// Константы
    CLASSES_COUNT_MAX: 45,
    ONE_CLASS_PRICE: 4000,
    COLORED_PRICE: 1000,
    UKRAINE_PRICE: 24000,
	FEW_APPLICANTS_COEF: 1.3,
	
	classesCount: 1,
	colored: 0,
	ukraine: 0,
	fewApplicants: 0,
    eClaim: 0
  },
  computed: {
    totalPrice: function () {
      var result = this.classesCount * this.ONE_CLASS_PRICE;
	  if (this.colored) {
        result += this.COLORED_PRICE;
	  }
	  if (this.ukraine) {
        result += this.UKRAINE_PRICE;
	  }
	  if (this.fewApplicants) {
        result *= this.FEW_APPLICANTS_COEF;
	  }
	  if (this.eClaim) {
        result -= result*0.2;
	  }
	  return result;
    },
	
    fewApplicantsPerc: function () {
      return this.FEW_APPLICANTS_COEF * 100;
    }
  }
})