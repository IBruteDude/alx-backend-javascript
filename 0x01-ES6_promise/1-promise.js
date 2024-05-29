export default async function getFullResponseFromAPI(success) {
  if (success) {
    return {
      status: 200,
      body: 'Success',
    };
  }
  return Error('The fake API is not working currently');
}
