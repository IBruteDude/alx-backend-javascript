export default function getFullResponseFromAPI(success) {
  return new Promise((resolution, rejection) => {
    if (success) {
      return resolution({
        status: 200,
        body: 'Success',
      });
    }

    return rejection(new Error('The fake API is not working currently'));
  });
}
