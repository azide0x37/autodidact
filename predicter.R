#crash_data <- import crash.csv
#drop location
require(lubridate)
require(C50)
require(dplyr)

crash_data <- select(crash_data, Age, Hometown, Severity, Troop, Datetime)

#Set Factor Variables
crash_data$hometown <- factor(crash_data$hometown)
crash_data$severity <- factor(crash_data$severity)
crash_data$troop <- factor(crash_data$troop)

#Set our model
fit <- C5.0(age, data = crash_data, trials = 10)

#fit summary
print fit

#test prediction
prediction <- predict(fit, crash_data[,-age])

#summarize accuracy
table(prediction, crash_data$age)

#FIXME: make separate test dataset using a randomized, representative selection
#TODO: test with classify factor variables
