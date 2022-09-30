# FundCamp-Ethereum-Website
An ethereum based project with a website to fund projects while ensuring the money has been put to proper use by involving all the approvals and transactions under a single blockchain.

# Description
People who want funding for their projects can create campaigns on this website and request for donations. But, the catch is, before spending any of the amount donated, they must request the contributors first with a description of where they are spending this said amount along with the account details of the vendor or receiver. Only if more than half the contributors approve of this will the transaction be initiated. In this way, the contributors can make sure that their contributions are not being spent on something fraudulent.

# Campaign Factory
Once a user wants to create a campaign on this website, he accesses it through his Metamask account and requests for a campaign to be created. There is a contract called the 'Campaign Factory' which does this job for him. A new campaign is created and only the user/manager can make changes to this contract. The user must add a minimum contribution that can be donated in order to create the campaign.

# Home Page
The home page consists of the list of campaigns that have been created with the user address. It also consists of a 'Create Campaign' button where users can create new campaigns.

# View Campaign
The details of a particular campaign can be seen on clicking 'View Campaign'. This page consists of the user address, the minimum contribution, the number of requests. the number of approvers and the total campaign balance. A user can also contribute any amount he wants to the campaign on this page.

# View Requests
This page consists of all the requests a particular user has made on his campaign. It contains a table of request ID, description, amount, recipient, approval count and the 'Approve' and 'Finalize' buttons. If the approval count exceeds half the number of contributors, the user can finalize the transaction. The page also has an 'Add Request' button where the user can make a new request.

# Create Request
This page is used to create a new request. Details such as description, value in ether required and the recipient's address are mentioned and the request is created which can further be approved or denied by the contributors.
