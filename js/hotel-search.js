(function(){    

    var hotelSearchSection = document.querySelector(".hotel-search");     
    var openFormButton = hotelSearchSection.querySelector(".hotel-search-button");
    var searchForm = hotelSearchSection.querySelector(".hotel-search-form");

    var dateFrom = searchForm.querySelector("[name=dateFrom]");
    var dateTo = searchForm.querySelector("[name=dateTo]");
    var adultsCount = searchForm.querySelector("[name=adultsCount]");
    var childrenCount = searchForm.querySelector("[name=childrenCount]");

    searchForm.classList.add("form-hidden");
    
    var isFormReadyToSend = function(){
        return dateFrom.value && dateTo.value && adultsCount.value && childrenCount.value;
    };

    openFormButton.addEventListener("click", function (evt) {
        evt.preventDefault();       
        searchForm.classList.toggle("form-hidden");
    });

    searchForm.addEventListener("submit", function (evt) {
        if (!isFormReadyToSend()) {
            evt.preventDefault();
            searchForm.classList.remove("form-error");
            searchForm.offsetWidth = searchForm.offsetWidth;
            searchForm.classList.add("form-error");
        } else {
            searchForm.classList.remove("form-error");
        }
    });
})();

