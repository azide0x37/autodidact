#crash_data <- import crash.csv
#drop location
library(lubridate)
library(C50)
import(dplyr)

crash_data <- factor(crash_data$troop, crash_data$severity, crash_data$hometown)
fit <- C5.0(age, data = crash_data, trials = 10)

#fit summary
print fit

#test prediction
prediction <- predict(fit, crash_data[,-age])

#summarize accuracy
table(prediction, crash_data$age)

#FIXME: make separate test dataset using a randomized, representative selection
#TODO: test with predicting factor variables
