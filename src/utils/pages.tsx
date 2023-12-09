import { DocumentIcon, DocumentTextIcon, FolderIcon, HomeIcon } from "@heroicons/react/24/solid";
import { Page } from "../types/common";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import { Blog } from "../pages/Blog";

export const pages:Page[] = [
    {
      title: "Home",
      icon: <HomeIcon className="h-4 w-4" />,
      component: <Home />,
    },
    {
      title: "Projects",
      icon: <FolderIcon className="h-4 w-4" />,
      component: <Projects />,
    },
    {
      title: "Resume",
      icon: <DocumentTextIcon className="h-4 w-4" />,
      component: <Home />,
    },
    {
      title: "Blog",
      icon: <DocumentIcon className="h-4 w-4" />,
      component: <Blog />,
    },
    {
      title: "Contact",
      icon: <HomeIcon className="h-4 w-4" />,
      component: <Contact />,
    },
  ];