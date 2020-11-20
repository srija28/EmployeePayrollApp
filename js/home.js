window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
 });

 const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    const innerHtml = `${headerHtml}
    <tr>
    <td>
        <img class="profile" alt="" src="../assets/Ellipse -7.png">
    </td>
    <td>Shreya Reddy </td>
    <td>Female</td>
    <td>
        <div class="dept-label">Finance</div>
        <div class="dept-label">Engineering</div>
    </td>
    <td>200000</td>
    <td>16 Nov 2020</td>
    <td>
        <img id="1" onclick="remove(this)" alt="delete" src="../assets/delete-black-18dp.svg">
        <img id="1" alt="edit" onclick="update(this)" src="../assets/create-black-18dp.svg">
    </td>
 </tr>
    `;
    document.querySelector("#display").innerHTML = innerHtml;
 }; 