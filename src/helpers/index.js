import titleize from 'titleize';

export const rentalType = isShared  => isShared ?'shared' : 'entire';

export const toUppercase = value => value ? titleize(value) : '';