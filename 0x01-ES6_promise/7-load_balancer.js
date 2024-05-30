export default function loadBalancer(chinaDownload, USDownload) {
  let val1 = chinaDownload;
  let val2 = USDownload;

  if (val1)
    return val1;
  return val2;
}
