import { Organization,IOrganization } from "./model";
import { Event } from "../event/model";
import { Attendee } from "../attendee/model";
import { Ticket } from "../ticket/model";

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

const findOneOrganizationQuery = (organizationId:number) => Organization.findOne({include: [{
    model: Event,
    attributes: ['id', 'name', 'venue', 'poster', 'startDate', 'organizationId'],
    include: [{
        model: Attendee,  
    }]   
}],where: {id: organizationId},},);

const findAllOrganizationsQuery = () => Organization.findAll();

// const organizationSpecificEventsQuery = async (orgId:number) => Event.findAll({ where: { id: orgId},},)

export {createOrganizationQuery, findOneOrganizationQuery, findAllOrganizationsQuery};