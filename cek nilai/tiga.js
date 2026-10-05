function cekNilai() {
    let nama = document.getElementById('nama').value.trim();
    let nilai = Number(document.getElementById('nilai').value);

    if (!nama) return alert('Masukkan nama siswa!');
    if (isNaN(nilai) || nilai < 0 || nilai > 100) return alert('Nilai harus 0–100!');

    let grade;

    if (nilai >= 80) grade = 'A';
    else if (nilai >= 70) grade = 'B';
    else if (nilai >= 60) grade = 'C';
    else if (nilai >= 50) grade = 'D';
    else grade = 'E';

    let status = nilai >= 60 ? 'LULUS' : 'TIDAK LULUS';
    let kelas = nilai >= 60 ? 'lulus' : 'tidak-lulus';
    document.getElementById('hNama').textContent = nama;
    document.getElementById('hNilai').textContent = nilai;
    document.getElementById('hGrade').textContent = grade;
    document.getElementById('hStatus').textContent = status;
    document.getElementById('hStatus').className = kelas;
    document.getElementById('hasil').style.display = 'block';
}