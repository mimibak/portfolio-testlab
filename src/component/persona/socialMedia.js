export function replaceSocialMedia() {
  const newFacebookLink = "https://www.facebook.com/NeuesProfil";
  const newInstagramLink = "https://www.instagram.com/callmecheesuschrist/";

  // SM Links austauschen
  const socialMediaLinks = document.querySelectorAll(
    ".persona__social_media_icons a"
  );

  socialMediaLinks.forEach((link) => {
    console.log("Current link:", link.href);
    if (link.href.includes("facebook.com")) {
      link.href = newFacebookLink;
      console.log("Facebook link updated to:", newFacebookLink);
    }
    if (link.href.includes("instagram.com")) {
      link.href = newInstagramLink;
      console.log("Instagram link updated to:", newInstagramLink);
    }
  });
}
