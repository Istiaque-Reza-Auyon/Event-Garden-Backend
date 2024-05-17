import { Organization,IOrganization } from "./model";

const createOrganizationQuery = (organization:IOrganization) => Organization.create ({
    name: organization.name,
    adminId: organization.adminId,
    country: organization.country,
    bioGraphy: organization.bioGraphy,
    instaUsername: organization.instaUsername,
    twitterUsername: organization.twitterUsername,
    linkedInUrl: organization.linkedInUrl,
    websiteUrl: organization.websiteUrl,
    customLinks: organization.customLinks
})

const findOneOrganizationQuery = (organizationId:number) => Organization.findOne({where: {id: organizationId},},);

const findAllOrganizationsQuery = () => Organization.findAll();

export {createOrganizationQuery, findOneOrganizationQuery, findAllOrganizationsQuery};