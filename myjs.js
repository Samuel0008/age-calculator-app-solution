const dayError = document.querySelector(".day-error");
    const monthError = document.querySelector(".month-error");
    const yearError = document.querySelector(".year-error");
    const dayOutput = document.querySelector("#day-output");
    const monthOutput = document.querySelector("#month-output");
    const yearOutput = document.querySelector("#year-output");
    const firstPara = document.querySelector(".first-para");
    const secondPara = document.querySelector(".second-para");
    const thirdPara = document.querySelector(".third-para");
    const day = document.querySelector("#day");
    const month = document.querySelector("#month");
    const year = document.querySelector("#year");
    const col = 'color: hsl(0, 100%, 67%);';
    const borderCol = 'border-color: hsl(0, 100%, 67%);';

    
    function myFunc() {
        const dayInput = document.querySelector("#day").value;
        const monthInput = document.querySelector("#month").value;
        const yearInput = document.querySelector("#year").value;
        dayError.setAttribute('style', col);
        monthError.setAttribute('style', col);
        yearError.setAttribute('style', col);
        firstPara.setAttribute('style', col);
        secondPara.setAttribute('style', col);
        thirdPara.setAttribute('style', col);
        day.setAttribute('style', borderCol);
        month.setAttribute('style', borderCol);
        year.setAttribute('style', borderCol);
        
        // alert("Hello there1");
        if(dayInput !== "") {
            dayError.textContent = "";
            if(!(dayInput > 31)) {
                dayError.textContent = "";
            } else {
                dayError.textContent = "Must be a valid day";
            }
        } else {
            dayError.textContent = "This field is required";
        }
        if(monthInput !== "") {
            monthError.textContent = "";
            if(!(monthInput > 12)) {
                monthError.textContent = "";
                if(monthInput === "02") {
                    
                    if(dayInput > 28) {
                        dayError.textContent = "Must be a valid date";
                        }
                }
                if(monthInput === "04") {
                    
                    if(dayInput > 30) {
                        dayError.textContent = "Must be a valid date";
                        }
                }
                if(monthInput === "06") {
                    
                    if(dayInput > 30) {
                        dayError.textContent = "Must be a valid date";
                        }
                }
                if(monthInput === "09") {
                    
                    if(dayInput > 30) {
                        dayError.textContent = "Must be a valid date";
                        }
                }
                if(monthInput === "11") {
       
                    if(dayInput > 30) {
                        dayError.textContent = "Must be a valid date";
                        }
                }
                
            } else {
                monthError.textContent = "Must be a valid month";
            }
        } else {
            monthError.textContent = "This field is required";
        }
        if(yearInput !== "") {
            yearError.textContent = "";
            if(!(yearInput > 2023)) {
                yearError.textContent = "";
            } else {
                yearError.textContent = "Must be in the past";
            }
        } else {
            yearError.textContent = "This field is required";
        }
        
        if(yearError.textContent === ""){
            // DO STH 1
            
            if(monthError.textContent === ""){
            // DO STH 2
            
            if(dayError.textContent === ""){
              
            // DO STH 3
            // AGE CALCULATION
            const isError = false;
            if (!(isError)) {
              dayError.setAttribute('style', 'color: hsl(0, 100%, 67%);');
              monthError.setAttribute('style', 'color: hsl(0, 100%, 67%);');
              yearError.setAttribute('style', 'color: hsl(0, 100%, 67%);');
              firstPara.setAttribute('style', 'color: hsl(0, 0%, 86%);');
              secondPara.setAttribute('style', 'color: hsl(0, 0%, 86%);');
              thirdPara.setAttribute('style', 'color: hsl(0, 0%, 86%);');
              day.setAttribute('style', 'border-color: hsl(0, 0%, 94%);');
              month.setAttribute('style', 'border-color: hsl(0, 0%, 94%);');
              year.setAttribute('style', 'border-color: hsl(0, 0%, 94%);');
            }
            const myDate = new Date();
            const myDay = myDate.getDate();
            
            const myMonth = myDate.getMonth() + 1;
            
            const myYear = myDate.getFullYear();
            
            let currentAgeInYears;
            let currentAgeInMonths;
            let currentAgeInDays;
                        
            if(monthInput > myMonth) {
                // alert("Choice 1");
                // dayOutput.textContent = 21; 
                // monthOutput.textContent = 6; 
                // yearOutput.textContent = 21;
                currentAgeInYears = myYear - Number(yearInput) - 1;
                
                // MONTH CALCULATION
                if( dayInput > 21) {
                    //WHEN DAY INPUT IS GREATER 
                    currentAgeInMonths = 11 - (monthInput - myMonth);
                } 
                if( Number(dayInput) === myDay) {
                // WHEN BOTH ARE EQUAL
                currentAgeInMonths = 12 - (monthInput - myMonth);
                }
                if( dayInput < myDay) {
                    //WHEN MY DAY IS GREATER
                    
                    if((monthInput - myMonth) > 1) {
                        currentAgeInMonths = 11 - (monthInput - myMonth - 1);
                    } else {
                        currentAgeInMonths =11 - 0;
                    }
                    
                }
                
                if(dayInput > myDay) { 
                    currentAgeInDays = 30 - (dayInput - myDay);
                }
                if(Number(dayInput) === myDay) {
                    currentAgeInDays = 0;
                 }
                if(dayInput < myDay) {
                    currentAgeInDays = myDay - dayInput;
                 }
                
                   
            }
            if(Number(monthInput) === myMonth) {
                // alert("Choice 2");
                if(dayInput < myDay) {
                    currentAgeInYears = myYear - yearInput;
                }
                
                if(Number(dayInput) === myDay) {
                    currentAgeInYears = myYear - yearInput;
                }
                
                if(dayInput > myDay) {
                    currentAgeInYears = myYear - yearInput - 1;
                }
                
                if(dayInput > myDay) {
                    currentAgeInMonths = 11 - 0;
                 }
                if(Number(dayInput) === myDay) {
                currentAgeInMonths = 0;
                 }
                if(dayInput < myDay) {
                    currentAgeInMonths = 0;
                 }
                
                if(dayInput > myDay) { 
                    currentAgeInDays = 30 - (dayInput - myDay);
                }
                if(Number(dayInput) === myDay) {
                    currentAgeInDays = 0;
                 }
                if(dayInput < myDay) {
                    currentAgeInDays = myDay - dayInput;
                 }                     
            }
            if(monthInput < myMonth) {
                // alert("Choice 3");
                currentAgeInYears = myYear - yearInput;
                
                // MONTH CALCULATION
                if( dayInput > 21) {
                    //WHEN DAY INPUT IS GREATER 
                    currentAgeInMonths = myMonth - monthInput - 1;
                } 
                if( Number(dayInput) === myDay) {
                // WHEN BOTH ARE EQUAL
                currentAgeInMonths = myMonth - monthInput;
                }
                if( dayInput < myDay) {
                    //WHEN MY DAY IS GREATER
                    currentAgeInMonths = myMonth - monthInput;
                }
                
                if(dayInput > myDay) { 
                    currentAgeInDays = 30 - (dayInput - myDay);
                }
                if(Number(dayInput) === myDay) {
                    currentAgeInDays = 0;
                 }
                if(dayInput < myDay) {
                    currentAgeInDays = myDay - dayInput;
                 }
            }
            
            
            
            dayOutput.textContent = currentAgeInDays;
            monthOutput.textContent = currentAgeInMonths;
            yearOutput.textContent = currentAgeInYears;
            // alert(currentAgeInYears);
            // alert(currentAgeInMonths);
            // alert(currentAgeInDays);
        }
        }
        
        
        }
        
    }