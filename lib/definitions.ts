interface Project {
    technologies: string[];
    project_type: Projecttype;
    cover_image: Coverimage;
    excerpt: string;
    project_description: string;
    project_url: string;
    project_name: string;
  }
interface Coverimage {
asset: Projecttype;
_type: string;
}
interface Projecttype {
  type_name: string;
}

interface IFormInput {
  name: string;
  email: string;
  phone: string;
  message: string;
}
