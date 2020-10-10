const branchName = require('current-git-branch');
 
if (branchName() == 'master') {
    console.log('can not push in main branch');
    process.exit();
}