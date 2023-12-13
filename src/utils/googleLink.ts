export default function convertGoogleDriveLink(gDriveLink:string) {
  // Check if the provided link is a valid Google Drive sharing link
  const match = gDriveLink.match(/\/file\/d\/(.+?)\/view/);

  if (match) {
    // Extract the file ID from the link
    const fileId = match[1];

    // Construct the direct download link
    const directDownloadLink = `https://drive.google.com/uc?export=view&id=${fileId}`;

    return directDownloadLink;
  } else {
    // If the link format is invalid, return an error message
    return "Invalid Google Drive sharing link";
  }
}

console.log(convertGoogleDriveLink("https://drive.google.com/file/d/1VmUF6SKtAKE93nHmN_36b2klGdQ0LIWV/view?usp=drive_link"))