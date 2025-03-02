import mongoose from "mongoose";

enum SocialsSource {
  facebook = "facebook",
  twitter = "twitter",
  instagram = "instagram",
  github = "github",
  linkedin = "linkedin",
  youtube = "youtube",
  website = "website",
}

interface Socials {
  source: SocialsSource;
  url: string;
}

export interface Profile extends mongoose.Document {
  name: {
    firstName: string;
    lastName: string;
  };
  user_id: mongoose.Schema.Types.ObjectId;
  profilePic: string;
  bio: string;
  location: string;
  socials: Socials[];
}

const ProfileSchema: mongoose.Schema<Profile> = new mongoose.Schema(
  {
    name: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
      },
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      default: "",
    },
    location: {
      type: String,
      default: "",
    },
    socials: {
      type: [
        {
          source: {
            type: String,
            enum: Object.values(SocialsSource),
          },
          url: {
            type: String,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

export const Profile = mongoose.model("Profile", ProfileSchema);
