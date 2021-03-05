export const CVData = {
  personalData: {
    name: "Pedro Cerqueira",
    title: "Bioinformatician",
    contacts: [
      { type: "email", value: "pedrorvcerqueira@gmail.com" },
      { type: "location", value: "Portugal" },
      { type: "github", value: "github.com/pedrorvc" },
    ],
  },
  sections: [
    {
      type: "text",
      title: "Career Profile",
      content:
        "While studying in the field of Biology, I learned about different areas of specialization and completed projects along the degree. During this time the field of Bioinformatics came to my attention due to the new approaches it presented. Thus, I decided to join the master’s in Bioinformatics and Computational Biology in order to connect the acquired knowledge in Biology with a long passion for computer science. During the master’s course, I soon realized that overcoming challenges and constantly learning is what I believe to be the qualities required in order to become a professional of excellence in this field. My latest experience in bioinformatics applied to clinical microbiology has allowed me to further develop my skills and improve my critical thinking.",
      icon: "usertie",
    },
    {
      type: "common-list",
      title: "Education",
      icon: "graduation",
      items: [
        {
          title: "Biology (BS)",
          authority: "Faculdade de Ciências da Universidade de Lisboa",
          authorityWebSite: "https://ciencias.ulisboa.pt/en",
          rightSide: "2013 - 2016",
        },
        {
          title: "Bioinformatics and Computational Biology (MSc)",
          authority: "Faculdade de Ciências da Universidade de Lisboa",
          authorityWebSite: "https://ciencias.ulisboa.pt/en",
          rightSide: "2016 - 2019",
        },
      ],
    },
    {
      type: "experiences-list",
      title: "Experiences",
      icon: "archive",
      items: [
        {
          title: "Fellowship",
          company:
            "Molecular Microbiology and Infection group coordinated by Dr Mário Ramirez, at Instituto de Medicina Molecular João Lobo Antunes",
          description:
            "Maintenance and extension of chewBBACA, a complete suite for gene-by-gene schema creation and strain identification. Creationand curation of gene-by-gene typing schemas.",
          companyWebSite: "",
          companyMeta: "",
          datesBetween: "2021.01 - present",
          descriptionTags: ["Javascript", "React", "Python", "Docker"],
        },
        {
          title: "Fellowship",
          company:
            "Molecular Microbiology and Infection group coordinated by Dr Mário Ramirez, at Instituto de Medicina Molecular João Lobo Antunes",
          description:
            "Deployment and maintenance of a Nomenclature Server, based on the Typon ontology, to provide a public and centralised web service to host typing schemas and define allele identifiers. Developed with Python 3.7 and React (a Javascript framework). Maintenance and extension of chewBBACA, a complete suite for gene-by-gene schema creation and strain identification and integration with a RESTful API. ",
          companyWebSite: "https://imm.medicina.ulisboa.pt/",
          companyMeta: "",
          datesBetween: "2019.11 - 2020.11",
          descriptionTags: [
            "Javascript",
            "React",
            "Python",
            "Docker",
            "OpenLink Virtuoso",
            "Flask",
          ],
        },
        {
          title: "Fellowship",
          company:
            "Molecular Microbiology and Infection group coordinated by Dr João André Carriço, at Instituto de Medicina Molecular João Lobo Antunes",
          description:
            "Used Python 3.7 to develop a RESTful API using the Flask framework, OpenLink Virtuoso as a triple store database and PostgreSQL. Maintenance and extension of chewBBACA, a complete suite for gene-by-gene schema creation and strain identification and integration with a RESTful API. Development of a Nomenclature Server, based on the Typon ontology, to provide a public and centralised web service to host typing schemas and define allele identifiers.",
          companyWebSite: "http://somecompanyexample.com",
          companyMeta: "",
          datesBetween: "2019.4 - 2019.11",
          descriptionTags: [
            "Javascript",
            "React",
            "Python",
            "Docker",
            "OpenLink Virtuoso",
            "Flask",
          ],
        },
        {
          title: "Member of the research-unit BioISI",
          company: "BioISI",
          description:
            "Development of a novel toolkit able to generate geophylogenomic knowledge as a new approach for geotraceability, which included the development of Bash, Python 3.7 and R scripts, in addition to the creation of a MySQL database, in the framework of my master thesis.",
          companyWebSite: "http://bioisi.pt/",
          companyMeta: "",
          datesBetween: "2017 - 2018",
          descriptionTags: ["Python", "SQL"],
        },
        {
          title: "Lab technician",
          company: "Faculdade de Ciências da Universidade de Lisboa",
          description:
            "Responsible for developing an innovative method to test the potential of chemical substances, to improve the effectiveness of plant growth-promoting bacteria.",
          companyWebSite: "https://ciencias.ulisboa.pt/en",
          companyMeta: "",
          datesBetween: "2016 - 2017",
        },
      ],
    },
    {
      type: "common-list",
      title: "Full list of publications available at",
      description: "",
      icon: "comments",
      items: [
        {
          authority: "Google Scholar",
          authorityWebSite:
            "https://scholar.google.com/citations?user=znzR8A0AAAAJ&hl=pt-PT",
        },
      ],
    },
    {
      type: "common-list",
      title: "Conferences",
      description: "",
      icon: "comments",
      items: [
        {
          title: "Bioinformatic Open Days 2020",
          authorityMeta: "Speaker",
        },
      ],
    },
    {
      type: "common-list",
      title: "Languages",
      icon: "language",
      items: [
        {
          authority: "Portuguese",
          authorityMeta: "Native",
        },
        {
          authority: "English",
          authorityMeta: "Fluent",
        },
        {
          authority: "Spanish",
          authorityMeta: "Basic",
        },
      ],
    },
    {
      type: "tag-list",
      title: "Skills Proficiency",
      icon: "rocket",
      items: [
        "Python",
        "React",
        "Javascript",
        "Git",
        "SQL",
        "Docker",
        "Docker-compose",
        "Plotly",
        "Flask",
        "FastAPI",
        "Pandas & Numpy",
        "SQLAlchemy",
      ],
    },
    {
      type: "tag-list",
      title: "Hobbies & Interests",
      icon: "cubes",
      items: ["Science fiction", "History", "Technology"],
    },
  ],
};
