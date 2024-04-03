export const originErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.origin.$dirty) return errors;
  vFlight$.value.origin.required.$invalid && errors.push("This field is empty");
  vFlight$.value.origin.airportExistsValidator.$invalid &&
    errors.push("Please select an existing airport");
  vFlight$.value.origin.notSameAsDestination.$invalid &&
    errors.push("The departure and arrival airports must be different");
  return errors;
});

export const destinationErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.destination.$dirty) return errors;
  vFlight$.value.destination.required.$invalid &&
    errors.push("This field is empty");
  vFlight$.value.destination.airportExistsValidator.$invalid &&
    errors.push("Please select an existing airport");
  vFlight$.value.destination.notSameAsOrigin.$invalid &&
    errors.push("The departure and arrival airports must be different");
  return errors;
});

export const passengersErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.passengers.$dirty) return errors;
  vFlight$.value.passengers.required.$invalid &&
    errors.push("This field is empty");
  vFlight$.value.passengers.minValue.$invalid &&
    errors.push("Passengers must be between 1 and 99");
  vFlight$.value.passengers.maxValue.$invalid &&
    errors.push("Passengers must be between 1 and 99");
  return errors;
});

export const departureDateErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.departureDate.$dirty) return errors;
  vFlight$.value.departureDate.required.$invalid &&
    errors.push("This field is empty");
  vFlight$.value.departureDate.greaterThan.$invalid &&
    errors.push("Your departure must at least tomorrow");
  return errors;
});

export const returnDateErrors = computed(() => {
  const errors = [];
  if (!vFlight$.value.returnDate.$dirty) return errors;
  vFlight$.value.returnDate.required.$invalid &&
    errors.push("This field is empty");
  vFlight$.value.returnDate.lowerThan.$invalid &&
    errors.push("Your return must the same day of after your departure");
  return errors;
});

export const firstNameAndLastNameErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.firstName.$dirty) return errors;
  vContact$.value.firstName.required.$invalid &&
    errors.push("Please indicate your first name");
  vContact$.value.firstName.isName.$invalid &&
    errors.push("Please enter a valid first name");
  vContact$.value.firstName.maxLength.$invalid &&
    errors.push("Your first name is too long (max 30 characters)");
  vContact$.value.lastName.required.$invalid &&
    errors.push("Please indicate your last name");
  vContact$.value.lastName.isName.$invalid &&
    errors.push("Please enter a valid last name");
  vContact$.value.lastName.maxLength.$invalid &&
    errors.push("Your last name is too long (max 30 characters)");
  return errors;
});

export const phoneNumberErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.phoneNumber.$dirty) return errors;
  vContact$.value.phoneNumber.required.$invalid &&
    errors.push("This field is empty");
  vContact$.value.phoneNumber.isPhoneNumber.$invalid &&
    errors.push("This field must contain a valid phone number");

  return errors;
});

export const emailErrors = computed(() => {
  const errors = [];
  if (!vContact$.value.email.$dirty) return errors;
  vContact$.value.email.required.$invalid && errors.push("This field is empty");
  vContact$.value.email.email.$invalid &&
    errors.push("Please enter a valid email address");
  return errors;
});
