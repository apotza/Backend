import mongoose from "mongoose";

export interface ProjectInterface {
  name: string;
  details: string;
  codeBlocks: mongoose.Types.ObjectId[];
  components: mongoose.Types.ObjectId[]; // Store Components coordinates and Settings for the User
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new mongoose.Schema<ProjectInterface>(
  {
    name: {
      type: String,
      default: "Untitled Project",
    },
    details: {
      type: String,
      default: "Some details about this project",
    },
    codeBlocks: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CodeBlock",
      },
    ],
    components: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Component",
      },
    ],
  },
  { timestamps: true }
);

export const Project = mongoose.model("Project", ProjectSchema);
