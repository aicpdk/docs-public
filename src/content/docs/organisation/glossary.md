---
title: icel glossary
description: The words icel uses for its people, departments and products.
---

icel is one company with departments across Denmark. This glossary names its people, its departments and its products, so every product and the login system use the same words.

## Organisation

**icel**:
The company. Every department, member and product belongs to it.
_Avoid_: AICP, the org (when you mean the company)

**Board**:
icel's top management (C-level). It stands above all departments, sees all of them, creates departments and appoints their admins.
_Avoid_: HQ, management, leadership

**Department**:
A local branch of icel in one city, e.g. Copenhagen, Aarhus, Odense, Helsingør. Departments sit side by side under the board.
_Avoid_: organisation, sub-organisation, branch, school, tenant

## People

**Member**:
A person registered with icel, whatever their role. A member has exactly one identity and one home department, however many departments reference them or products they use.
_Avoid_: person, user, account

**Personal data**:
What icel knows about a member as a person: name, address, phone, email and relations. Registry is the single source; the login system receives name and email from Registry. Members can't edit it themselves yet.
_Avoid_: profile, user data, contact info

**Relation**:
A link between two members: family (parent, step-parent, guardian, partner, sibling) or contact (emergency contact, other).
_Avoid_: connection, link, family member (a relation can also be a contact)

**Guardian**:
A relation: a member legally responsible for a child who is not the child's parent.
_Avoid_: using it for every student contact

**Emergency contact**:
A relation: a member a school may call about a student in an emergency, family or not.
_Avoid_: next of kin, guardian

**Home department**:
The one department a member comes from and belongs to. It owns the member's record and personal data.
_Avoid_: origin, primary department, membership (for a second department)

**Reference**:
Another department's link to a member whose home department is elsewhere, for any reason, e.g. someone who works at that department or a relative of one of its members. A reference can give the member product access through that department. The referencing department sees only the member's name and contact details. It requests the reference, and the home department approves it.
_Avoid_: membership, transfer, copy

**Move**:
Changing a member's home department, done by the board or developers. The old department loses access to the member and the new one gains it.
_Avoid_: transfer, migration

**Department role**:
What a member is in their home department: department admin, employee or customer.
_Avoid_: position, title

**Employee**:
A member who works for their home department.
_Avoid_: staff, volunteer, worker

**Customer**:
A member a department serves. Today a customer is a record only; logging in may come later.
_Avoid_: client, end user

**Student**:
A person a school teaches. A student is a member with the customer role in the department that runs the school.
_Avoid_: pupil, roster entry

**Student contact**:
A member linked to a student by a relation: parent, guardian, emergency contact or other.
_Avoid_: guardian (that is one kind of relation), parent

**Department admin**:
A member who manages the members of their own department and no other. Beyond the name and contact details of referenced members, they can't see other departments' members.
_Avoid_: local admin, branch manager

**Developer**:
A member of the central technical team. Developers are the root of the system: they run the products and infrastructure across all departments and manage their own logins. Each also has an ordinary home department.
_Avoid_: staff, superadmin, platform admin

## Products

**Product**:
An application icel's people use, e.g. Mudawama or Registry. Every department uses the same products, and the products complement each other for the same people.
_Avoid_: app (when you mean the offering), tool, system

**Registry**:
The product that is the single source of truth for members, their personal data, departments, references and department roles. Only admins use it: department admins manage their members there and give them access to products. Other products ask Registry what a member may see.
_Avoid_: member registry, CRM

**Product access**:
Which products a member may open, granted by their home department or by a department that references them. The department role gives defaults, and that department's admin can add or remove products. What the member can do inside a product is up to the product's own permissions.
_Avoid_: license, entitlement, permission

**School**:
A school run by one department, inside Mudawama. A department can run several schools.
_Avoid_: tenant, class

**School role**:
What a member is in one school, e.g. school admin or teacher. Mudawama decides it, and only among the schools of departments that give the member access to Mudawama.
_Avoid_: department role (that is Registry's)

**Event**:
One scheduled meeting of a class in Mudawama, with a date, a place and the teachers who take it. Attendance is registered per event. An event can repeat, for example every Monday and Wednesday, and then each meeting is its own event. A single meeting can be cancelled without affecting the others.
_Avoid_: lesson, session, appointment

**Department scope**:
The rule that a member sees data in a product only for the departments that gave them access to it, whether home or referencing. Access through one department never shows another department's data. The board and developers see all departments.
_Avoid_: tenant isolation, data partition

**Former member**:
A member who has left their home department. Their record is kept and their login is blocked until they rejoin a department.
_Avoid_: deleted member, inactive user
