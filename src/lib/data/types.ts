export type ProfileLinks = {
	github: string;
	linkedin: string;
	email: string;
};

export type Profile = {
	name: string;
	title: string;
	titleAccent?: string;
	location: string;
	availability: string;
	summary: string;
	links: ProfileLinks;
};

export type SkillCategory = {
	name: string;
	tags: string[];
};

export type Project = {
	title: string;
	role?: string;
	description: string;
	url?: string;
	tags: string[];
	image?: string;
};

export type Experience = {
	company: string;
	companyUrl?: string;
	title: string;
	dates: string;
	location: string;
	highlights: string[];
	details: string[];
};

export type Education = {
	degree: string;
	school: string;
	years: string;
};

export type Cta = {
	heading: string;
	body: string;
	primaryLabel: string;
	secondaryLabel: string;
};

export type Resume = {
	profile: Profile;
	skills: SkillCategory[];
	projects: Project[];
	experience: Experience[];
	education: Education;
	cta: Cta;
};
