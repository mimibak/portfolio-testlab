export function replaceSocialMedia() {
  const newFacebookLink = "https://www.facebook.com/NeuesProfil";
  const newInstagramLink = "https://www.instagram.com/callmecheesuschrist/";
  const newXLink = "https://x.com/johndoefromX";
  const newLinkedinLink = "https://www.linkedin.com/in/john-doe-096200235/";

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
    if (link.href.includes("x.com")) {
      link.href = newXLink;
      console.log("X link updated to:", newXLink);
    }
    if (link.href.includes("linkedin.com")) {
      link.href = newLinkedinLink;
      console.log("LinkedIn link updated to:", newLinkedinLink);
    }
  });
}
