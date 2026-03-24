// Auto-generated from index.html

export interface Experiment {
  num: number;
  title: string;
  section: string;
  desc: string;
  setupTime: string;
  duration: string;
  summary: {
    whatTheyLearn: string;
    instructions: string[];
    expectedOutcome: string;
  };
  experiment: {
    equipment: Array<{ emoji: string; name: string }>;
    observationsToRecord: string[];
    theoryPoints: string[];
    realWorldConnections: string[];
    formula: string;
  };
  questions: {
    mcq: Array<{
      text: string;
      options: string[];
      correctIndex: number;
      explanation: string;
    }>;
    discussion: string[];
  };
  overview: {
    conceptBreakdown: Array<{ label: string; pct: number }>;
    misconceptions: string[];
    hook: string;
    khanLinks: Array<{ title: string; url: string }>;
  };
  dataTable: {
    headers: string[];
    rows: number;
  };
  observations: string[];
  conclusion: string;
  ai: {
    opening: string;
    keywords: {
      setup?: string;
      formula?: string;
      error?: string;
      question?: string;
      real?: string;
      result?: string;
      extend?: string;
      explain?: string;
      hook?: string;
      misconception?: string;
    };
    hint: string;
    expected: string;
  };
}

export const sectionColors: Record<string, string> = {
  Mechanics: '#14B8A6',
  Heat: '#F97316',
  Acoustics: '#8B5CF6',
  Optics: '#10B981',
  Magnetism: '#EF4444',
  Electricity: '#F59E0B',
};

export const sectionEmojis: Record<string, string> = {
  Mechanics: '⚙️',
  Heat: '🔥',
  Acoustics: '🎵',
  Optics: '🔭',
  Magnetism: '🧲',
  Electricity: '⚡',
};

export const ATP_LOGO = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUUAAACECAIAAACI1a6vAAAehUlEQVR4nO2de1xTR9rHZ83rLgGrhGStoOASAtQrCjaAooLIxZaiYJUXfOtK0bxqddtabbvetlus266u1dLafmjRXl6k3vCytAhCS70CLSoU2woBxAvQLiGUrR52+Zz0/WNw9jSXk5Nz5uTmfD/9YwyTmTlpfplnnpl5nl/9/PPPgEAguAVDHD0AAoGADaJnAsF9IHomENwHomcCwX0geiYQ3AeiZwLBfSB6JhDcB6JnAsF9IHomENwHomcCwX0geiYQ3AeiZwLBffgvRw8AG519fQCAho5O9MqP/f19/f/y9x6BXhk1fPjIYV4jhw2TDCE/ZAQ3xFX1TA0MNP2j+9oPP3zd0fnVrVu6O3dtbSEpNGSsj8+4B0eOH/WgTCoVY5AEgp35lQvdl6QNhrYefZW25bNmrba7G2PLci/PuSHBUWPHho8ZLR06FGPLBII9cQ09a7t1JxobD16uZ6mjDvAPlPtMHDUKvTJq+HCvX/+6haH8m70/tvf0lF1rYm9nRXTUxFEPEpuc4HI4tZ6pgYG/X/1mf+2XZs3ppNCQGGXgZD9fb6nU1kmVNhh++OmnVl1PdXt7RVOz2fY10VGxqiCVQs5z9ASC3XFSPXf29R24dNl0QlYH+D82YfxkP1/f4cMxdqenqG+6vq9ubzftUaVQvBAfF+bni7E7AkEknE7PnX19e89dMDKJ5V6e2eqHE0JDxHZc0QZDdfuNokuXa2/cZL5OVE1wCZxIz9TAwN7zF4xmyKTQkN+rH7a/0aunqKP1X+dfrGa+qFIo/jY/Ba9pQCBgxFn0XPbdtd1nzjLXsUmhIatjpjtWPNTAwJmWVqOBaaKjstXTiLeM4IQ4Xs+dfX2vnK5k2rcZU8NWz5juPPtGtMFQ0dTMVLXcy/PVlEeJ+U1wNhys57Lvrm0pLUP/dGaDlhoY2H66krmwz5ga9sysmWSiJjgPDtMzbTC8dKqcKY/ceUlJD4U6ZDDc0XbrtpaWodMsKoXircfTyPEygpPgGD3rKeqpI8eQKtQB/jtSU5zHwGaHNhj2137FdJW9viB1RuDvHDciAmEQB+i5vqNzxcHD6J/r42YvnhJm5zEIp76j88WST9CKWhMdtTxK7dghEQj21jNTzHIvz7z0NNc9gKWnqC2fnkKePJeTtF7fu2PXm0YvzoyJnpcUj6Xx6to64e2IQbAqUBWkZL5ypb6xs+t7LI0/8MAwZeBYWJZ5e0ulHlia5Yhd9XzoSv3Oz7+AZdeysS1hZHurA/z3pM13CQ+ZXt8bn5xm9k+ZGekb1q0V0ri2pXXV2g06XY+QRkRlX37elLCJ6J8bt2w7VV4pUl/BKmWQMnBmTHSwKjDwd2MlEolIHQF76vm96lpX/N5zwRUfLb/gw3fy91v665cXKoR87USVBy4u1XyOyjt25RUdLLZPv5kZ6QnxcZMmjhND2HbSs9HMjP0bD4MZiIfVKx/MjTeXkHTCIwtZ5k+j6ctWrOpZLvd5OGKq2T+1tLY1a1u59ALnPd6NMPUMANDre9/b/5Gtql6pyfYfMxqWb966ff36DY69w/c+kbUYr0FuDz0z18xiLDKZ06MYcNSn2I+JEW1L6+KsHJYKkeqIt/N28m4/PDKOpeXtL2+WybwtVSgtq9y0dRuXXl55eTPLUp+i+nO372T5WTHSM+TchZo/b/sr95VCyfEiP99Rpq9TVH/d5frCosM11pwI7E9hK6LPIcxveVJoiLuKGQAQ5uf7bsYiWM6/WP1eda14oxLIZ1Xn2CvU1NZRVD/2fldqst/O28kiZoxIpR7bcze/8vJmm94VMz1yx1/+zL2+zNvbUu8x0yPfzttZcrwoWKU0Wweyaeu2jCU5HZ1dNo3TEuLqWU9RSMzqAP+XkhPxtu88YoaE+flqoqNgOf9iddl310QbmiAOHz1htU4da/QIHgSrlDnLluBt0yrzkuKTE22b/cYGjOFe2aq17Oc76sCH+ZkZ6Sx1mrWtKQsytS2cVhnsiKhn2mDI+qgQlsVYUoot5oypYTzGvDxKjSS9pbRM7IU9D7QtrVzsycKiw1br2MTrO18R1bVriS0b19tUH7v5IJFINqxba/VnZdXaDXp9r8C+RNTzS6fK4XELuZdn7iPJriVmTXTUc7Gz+Y15eZRaHeAPy09+fIg2GLAOTSjHTnzCpRpekzszI93sOtMOSKUeZq1uFhPX1imdC1s2rpfLfVgq6HQ9i5fkCJS0WHo+33Ydnc3OS8d5wpk2GOwgZoHr/D1p8+VengAA3Z27L50qxzQuDNA0zd2Fi9HkXrNqBa6meJA4N5ZdS3ZAKvX40+bn2evodD0bufkCLSGKnvUU9ezxk7C8Pm42xhNgtMHw9LETTi5mAIBkyJB9/70YlsuuNTnPQvrrxm+5V8Zlcq/UZNv5mJQREolk3dOrHTgASMz0SKt1amrrSsv4b92LouenjhyDBXWAP8az2VDMRpGA8IJxn8l3+PDceUmwvKW0jBoYwNKsQE5XmtmksQQuk/uJrMXCGxGIM0zRAAB2xxhk1569vD92/Hou++4avDgl9/LckZqCq1nXEjMk6aFQtJDeftrx56WQsS2X+7BvoiBOlpTa2ovRdzEzI92xkzNEIpEsz/4fR48CRHP4gul0PbxXOpj1TA0M7D5zFpY3J8zFdTzbFcUMyX0kGRbKrjVpu3XY27cJZGwvWjg/fQGnn9ri4yW29qLv7WX+c0nmIltbEInUlHmOHgKImMrJXOW90sGs573nL0CftjrAH9eVYNcVMwBAJpWuj5sNy1tLyxzr6z505DgszImNSZxr8QgXk2ZtqxCPa3JivKPc2qZIpR4rNdkOHwOXarxXOpgPUaPonJsS8Hj8XVrMkIWTJ0Fft7a7u6KpWbyO2KGofnj4US73UQUpZTJvjiZ3eYUNS24j1qxezvu9YuAMK3mOm2H8TG6cet577gIsaKKjsMQAcwMxAwAkQ4a8mvIoLO8+c9ZRUzT6fixaOB8WRDK5pR4eyYnxyYnxKzXZzjM5Q+BeNByeo8dihX/+8yce78KWX7Kzrw9tOC+xcHXGJtxDzJAwP191gH/tjZu6O3crmpodEiYNLcnmxMbAQuLcuNd2vmH1jdDk5n5qSibz3p5r26lpezIvKR7j/QceyGQjrFcCoI/XyUJs8/OBS5dhQRMdJdwNZgcxv5uxyJ5XoFbcOwTqkCmaovrhRR9obMMX7WNyE4yYOGE8l2r1DVd5NI5nfqYGBtDKGcvk3Najf2zC+Me4PTkPghQKO8c5CvPzVSkU2u5u3Z271e037Bw/EBnbRns28XNmc7mpW3y8JGOR+WAmBKcCj54L63BOzgAAlULuunHFLPFCfBy8bfbWuQt21nPeW/mwYOTWnhMbwxKlBNGsbe3o7HK2xbB7w9EsNwKDvU0bDEcbGmB5Ydgk4Q26K3CKBgBou7vtuRet1/fCSThYpTRaBquClBxPTZV86kSn0F0ajgtjjma5ERj03Nj1PdpzJpHl2VkwaQIsVGlb7NYpWv2adWgjdzc7XK5ME7jAcWHsO+pBHo1j0HNF06BbOzMcw8rZvUEegaMNDXbziqENJ7NnSJC7mx2drgfLhXsCR0aOVPB4l9D1M20wIE9Y1NgA7m/UU9SuexECRWJjQrzZxbzYXXt7Sp+LnW32T9KhQ9HGVWPX93bIaMdibEOgyc0lwsFnVeeMwlYTeGB0HtYSliIZsSNUz9XtN2AhY2oY99v/eorK+qiQmYQVO+9mLLIkZlG7lnt5HniCLapOZvhUuA9X0dRkBz0jY3vtUxpLdRYtnM/FK3b46AlNzlJsI7tfsRohEACQnBjP7xKLUHu7ur0dFuaGhHB8i33EbFYq9R2dSe+8K7aY2Z0IyIo5iDtAl1ne2/9/sMByE4CY3HaDY9y/xY8v4Ne+UD2jA8kTuS3fHStmZt4s7HARMwBAMmQIukQpdnQxFCosUh3B8nvP3cttNTAogR0uzrBglZJ38HNBetZTFPJsczG2iZghs+6tQhs6OsUbEmDIz+qlRe5ebpqmhQ7rPubsuYtW6yxbmsW7fUF6/uZeCq9ZHNwkRMyI8DGDEWHPtbaJNigAGJtMVq/dcje5bYpYRGBC07TVNEDBKmXi3FjeXQjSM1o8oy+oJYiYmQT6yGCBmc4eOxyNbQh3k9umiEUEJgXvF7JXkMt93nnzb0KiGgvSM1o8oy+oWezjUnYVMQN7LaGRsf2/y5dxqc/R5C46WExMbh50dHZZ3UT4oOAtgdG/BekZhddmWTzbR8xmD3s7p5ghU0YPJjG7829R4gTSNI2+PZMmjuPyFvW0cI6NE5PbVmiazt1uJR/Yvvw84Sfk+esZTSzTLBvb9hGzWUU5s5gBAP7eg6ftW7q78Q3qPyDJZWakc7TfOMoeEJPbRvT63qylGvZtZ4EJPRH89fzDT3dgYZKFQxHabp27ilkd4F+y/Ekhh9Un3/vQbvb+iGlQvwBJLiGeU5wwAIBEIuESTRYQk5szNE2fu1ATn5zGcik1Uh1ReeoYFjEDIefDuu7NzyM8zPhaHDg92kHMwnNxedw7u9bewzU1KXeYSTC4z7oAgIT4OI7ZM75u/BbXV9DNgCdGWtvarSaLDVYp//j8s3g/Rv56buwaPOky2WR+JmK2Chp82bUmFNMXFzyMbYhNJjfRM2DNdM1CpDpiSeai6Mhp2BP08ddz713K7OsOFLOzpY91FDyMbQg0ublM0UUHi9esWuEMgfJdiOTE+Jkx0bGzZoj3uWGLBwghYuYODD+EqzUERfWjJBg8plDuJnfd5XouCZnuT4JVyiBloEw2YuKE8Q88MGzCuFD7ZLHHoGcUmpeI2SaC5D5i6Nk0Lq9NcDe5C4sOEz1fqnEuVz/O+XnkMK8TOcswNmiEt1RqKTjZo+MfenT8Q+J1PXLYMPHMbGpgAFdiIMCIy/tO/n4utyB5A3M4EJPbqeCvZ9Ozilhi6PPDgV0Lp5eicOkZxeW1D8Tkdjac3bVDsAmMGdi5gCtBNAEX/Odnkdw5BCEggR06UCAkNtCqteu5zPPE5HY2+M/PQU6QHds9wLVY0Ot7TZNg8IN7klc7WwQEdjD4w3C5c+7PCIEYQaHC+Hm2mXBMUwwAyHsrnyyhnQcMesbizrkPIwRiv/yM4vIuSk8V2JRU6hGpjuBictuarY4gKk7hD3NgtIPOvj5HXRrBi9W4vLbC3eQm2eqcB/56Rteq0EUrfjg2dMn8gvcdImYUTB8FNhAIexIMHnA3uW1NEE0QD/729ugRgzd4u/r6eMeRvm/jEP3w02C2blxTN3sSDB4Qk1sk1K9bz7kNqX32D7Y2zn9+Vt7zb6OLVrZy34oZANB6Lx9FjDJQeHfalla8xjaEmNwuB389e9/7srZxSJViyv0sZgDAT//6FywM+81vhPeIQoXhMrYhxOR2OfjrGfmKYfYWm7jPxQwYkXqVOLbxUVxeXMY2BJrcXGpCkxtj1wR+CPJvI1+OnjJ/F9osdtgfcnIxAwC+unULFkYOGyawUxSXF6+xDYmdNYNjTWJyOwOC9IzC6KPA+lYhsXsBI6+ISqEQfm1LJGMbwn3CR4my7isoqt/RQ/gFgr5MKIw+CqzPDgn3CUE/f3OCVQL7pWkaGdszY6IFtmYK9wnfnbLVcUzpalNN+yBIzyiMPpdUiSTcJwL9/MWqggR2faT4JErdLDUXmFE4yYnxHGvue/+A8O4ar37DsebJklLh3ZmF+53T1jZOM5ndEKRn7nke6js63VjMtoYu4ZhXxCoU1f/azv9sZjp8B/hUeSXHfKgslFdUcawJb3cJ7M4Umxx7F6trsQ9ACEIXb2gJfdZyajUS7pOJtltnU1JOS9A0ve75zcxXRFrL2WRSPrt+k5C+rtQ36mzZ/qw6c15Id2Zpv3GLe+XyiiqnWkIL1XNC6GAa9+Nfm09s69igYs4mZgBAlbYFFrgk5TQLTdOlZZXJjy02MgvXPb8Z73eLpmmOF6ERzdrWjVu28ZilOzq7Nm7Z9qRmrU3v2rR1G7/uLHHuQs2GP/6Je32drid14ZLSMitZI+3Gr37++WeBTWR9dAAGNjDNI0UiBBpBGwwp7+2D8/MXa1bZei9N29Jad6m++HgJS76FlZrsObExAu8/w742bX2FpSN2VmqyF6Wnsi8BKKr/dkdHs7btZEmpwDBJkeqI2FkzQkOCxwaM4bHuoGm67Xr7vvcPWM3naolglTJ9QcrMmGirOahEPe+JQc+HrtTv/PwLAIAmOmp5lJr5J/GSJ0JYIgSK3TW/CIHoB04d4P/mwjSb3tvR2ZWyIJNj5Vde3jwviasfy5SNW7bx/mZzHIZNj4OrU0vgel4uvYuqZwz3nx+bMB7q+WhDQ7Z6GvNbTiIEGnHkyuBGQGb4VMeOhOCWYJifAQBrjh6Dpz5z5yUlPRQqvEG3hBoYmP3m27B88ek1NtvqNP39D//gWFnm7S0krJde30v1Y1iKswzDpsfB1aklcD0vv94xgif+9oroKKjnD76sI3q2RGHdZVjQREfxsNUlEonw/MAckcm8Be2kccCej2MVOzyvfcATnyTMz1elUAAAtN3d9R2dWNp0M6iBAeSfWxJBjG2CKGDLj/FCfBz09LxW+fmBJ7JwNcvO+bbr6OKhGKjHBuCKN4Am56TQEIzZMAgEJtj0HObnK/fy1N25C6do3hFLuCP2jpQmOirpITxiZk7Oq2OmY2mTQDAFZzzAZ2bNhIUXSz5B8bHEgDYY7CBmo703Iew9fwEWkkJDnNPxTnAPcOp5bkgwXEXr7tw92vA1xpaZ0AbD08dOuJCYtd06dF9lXZzoUbgJ9zM49SwZMuTleUmwvPPzL2wKcsARKGYeEVG4g1fMtMGwtbQMltfHzbZD4F7C/Qzm+NsqhTzp3olu7BknXE7MAICKpmZ4GFbu5blw8iSMLRMIpuA5T8KEeWoC4/ESVxSznqKS3nkXli2FQOIORfWzXCcKmzwBbeey1IydNcPsaQe9vvfqt9cuVteOGDFi/LjQCeNCTU9Bo1sHzPOMqC/mAJj1jV7v6Oyqb7jKMhJ4lLruUv2Nm7eio9RmRwK5Ut/Y2fW90XgsQVH915q0tV9dAgCop4WHhqjYT33A4y71DVfPnrsYNnlCaEiw1bcwQY9piuloKaq/7nL97dsd9Q1XwyZPGD3aLzpymkQi4dgXE/x6BgCUfXdtyz0j80TOMuEeIFcUM20wPFH4MZyck0JDch9JFtgg+4Fn5rFhlpolx4uMVEfT9JpnXjC9DmF6Djk8cjD20KWa/4QKQ31Zqi+X+xwqLECaLC2r3LR1m9mRAACu1DeaXrGKVEe8ufs10+83OnTNHI9Z8gs+NE1tv1KTnbNsiVnZaFtaV63dYHRzUy73eTtvh9FFF7OfCWA8pilGNc32BQCoPHWMx8USbPtVTJIeCj3X2gbzMz358aGS5U8KuujrgmIGAOw+cxZZ2hsT+F+NQEg9PFCokC/rLsNvAHrFd9SDpm8JVimDfhnf2yiGiZGYg1XKHn0vbHnT1m2mUy4PdLqejVu3mRWkEUzVyeU+PjJveLurprZuzTMvcGnBpmbfyd9/+UqDabNGvynBKiWsr9P1rFq74dTfD9k0jEh1hMzb29JfaZpenJXDrAn/z/IO7SiKngEAGxPiv7p1S3fnru7O3d1nzvLOruiiYj7fdh35tPPS07AcIJHJvLfnDgYwQFMTesUsy5ZmsduiR4pPQjFHqiN2/XWbVOpB03R5RdWuPXt3/OXPuM5j1tTW7dqzd8M6trvNHZ1dSHX78vOmhE0EAFBU/7rnN9fU1nFpwSxX6hths3K5zwcFb8En0ut7Fy/J0el6amrryiuqjD4iJGY0gev1vYeLTx4+euJQYYGtvylbNq5n+RjbrrejvjQ5S2FZSBg2sfLRSYcOzUsfvA948HL9e7zCsthBzK8vSMUuZm237tnjJ2F5fdxsozvhTgWKgw/FDACQSCTzkuJPf3oUKgoXRQeL2S/9o9XmG6+/irqWSj3e3P2aXO4DbIlDxOR05aBxi8QMAJDJvA8VFsCyURAyFBohMyNdk7MUqlcm89bkLD396VHxIjpVfvaFtqWVpmkAgCpIyfv6uljzMwBApZCvj5sNr1LmX6x+OMDfJoeQHcQs3Edlip6i1hYfg2V1gP/iKVxTTIjBpq3bmKu45MR45nxOUf3QkkxOjLfpShBaNHJBLvdBBnywymJyH6Sr6MhpzNclEkni3Niig8U6XQ+PLFnwV0Au9zGaJGUyb5idq6a2jqZpNOuePXcRFhLi8WQmMHJkGHkZVEFK+Pk0a1uh4Z2ZkR4dpeadUlvcfLGLp4RpoqNgecXBw9yvariumFHYQ5VCsSdNaF51Uem/d0NQJhshXi8PR0x94/VXYXnV2g2Wwnf29OhhwdSgDfAfDAvN40oj/ClRBZn5HUHL2n//ewC9+GPfP2Fh5EgFs3JpWWV4ZJxNP2QcOXm0kBlBtehg8R+efXHV2vX8QkeJOD9DstXTrty+DZW54uBhLipyYDYcIdAGw1NHjsFhy70833o8TXisfIGs1GSnPJKI/mnkDJPJvOHkUF5RZdPStOR4ESq3trX/4dkX2evHTI9cqcl+J3+/TtdTdLDYbJ34ObOhsdDR2WU0l6K9twdH/pb7ICFmJ2HIl3WXAQDBKiXTNlFPC4fr7fqGq1jcB2+8/qoycCz6p6lvTCr12J67OfelP37d+G3tV5dg7zW1dXWX63nM0qJ/4SRDhuxJm4/C+lqdpV1UzHqKSnlvH3Jo2yeHu1X8x4z28x2F/jM1VhPnxgIAdLqe/IIP0YsU1Z9f8CFL2Fpmm8wvKws5y5awp8JSTwuHhdztO+EyEnKlvhF57Hj4t1NT5sFCwfuFzNfzCz6EU3f8nF94akNDBjMc7NqzF0tGLmXgWObHZbqugd4viUQyJWyiJmcp+q38tPQ0j+5En58BAJIhQ3akpqTv/wCqlGWWdl0xM4f9asqjziBmwFgNIoy2oNLmPwonTLh5k5oy7+at23CKgO5cXB4giUSy66/bUhcusRSOd9LEcWguzVqqSV+QMnz48Mar36D5/LlnVltq3MjTxnzG2FkzoA2CHhAAgMIPyuU+i9JTme+VSj2QKbF4Sc6ihfPHjwu9fbuDdwLNkk/L/ceMZr7CPEhDUf2Ls3KCVcplS7PCJk+4e/fusROfwD/xy3ZiDz0DAKRDhxZn/37DyRJkeJs9OnZD34suaYlBkEKB3dvc2df35MeHkJmdl57mPA7tU+WVRmHuXnl5M1PPqiDlvvy8DX/8E9y8YZ4qMbvmFIJU6nGosCA+2XwURIlE8ubu1+BmeLO2lZknAACwLz+PxeVrdHKD+YywU7Q7xXxAo4MuCLhvBCVtdApFbnsyUNNzLCXHi6TSweFBL2CzttXoEeRyH+6ZAJnYSc8AAOnQoXvS5iMv15bSssaurmdmzWQuMsP8fO1wcRoj59uuo60p5zGzbWJK2MRDhQXlFZ9XnTmPLNvYWTMeT0/ld36DBZnMe19+nqUg21DS5RVVZ89dhD9DwSpl/JzZAsMPw92p8orP6xuuwmbhAybOjbNkfWhylo4fF3qxura8ogoaFJHqiNSUeXB5gpGMRWmhIcGHjhxHP7vBKuW0iCnrnl7tROc9WTByXKsD/HMfSXY5DQAAaINh95mz6NCIi4rZCFOnkQOhqH4xAus51TNix956BgDQBsP+2q/QBWa5l+erKY+61rSsp6injhyD3i8AgDrAf0dqCokiRHA4DtAzpL6j88WST5APKWNq2OoZ051fErTBUNHUjG6bAAA00VFGUccJBEfhMD0Dk1lO7uX5zKyZzhzut7Ov77kTJcwBu5xlQXBvHKlnYLIKBQCoA/w3JcQ7W5AtamBg7/kLRuN00ZU/wY1xsJ4hRvMeACApNGR1zHRnUDU1MFBYd5kZrkzu5bk5Ye6MwN85blAEgnmcQs8QZhQEiGNVbapkAEDG1DCjPTYCwXlwIj0DCxJSKRS/fzhiVpDSPt4y2mBo7Pr+3YvVRrdBnMdkIBAs4Vx6hphVNQAgKTTk8SlhIb9ViCFs2mBo69FXaVvM9kuUTHAJnFHPEKjqow0Npse51QH+s4KU4WPGBPrIBJq+nX19DR2dKDqSERlTw7LCpxIlE1wF59UzBFq/FU1NTN8yE5VCEST3meTnO3rECKXcB1jOtA4zvP/w052uvr7Grq42XY+l+9UqheKpmOnhY0Y7/344gcDE2fWMoAYGLt26ferb78xOpFiA035CaAjZhSK4KC6jZybabt2lW7fOtLQKD2CiUijmBKseDvAXaVlOINgTl9QzEz1F6e7cbenuvtn7Y3tPDwCgRdfD3MqGyL08p40ZAwDw9pROHDVq1PDhI4d5kYUxwc1weT0TCAQEORdBILgPRM8EgvtA9EwguA9EzwSC+0D0TCC4D0TPBIL78P9rm8kG3VDu7gAAAABJRU5ErkJggg==';

export const experiments: Experiment[] = [
  {
    "num": 1,
    "title": "First class levers",
    "section": "Mechanics",
    "desc": "Explores how a balance arm pivots to demonstrate the principle of moments and equilibrium.",
    "setupTime": "5 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Explores how a balance arm pivots to demonstrate the principle of moments and equilibrium.",
      "instructions": [
        "Describe the equilibrium condition you observed:",
        "What happened when you moved the masses further from the fulcrum?",
        "State the relationship between force, mass and distance from the fulcrum (lever principle):"
      ],
      "expectedOutcome": "Weight (N) should be approximately mass(g) × 0.00981. Equilibrium occurs when moments balance. m=10g → W≈0.098N; m=25g → W≈0.245N; m=50g → W≈0.490N"
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Lever bar"
        },
        {
          "emoji": "🔩",
          "name": "Fulcrum pivot"
        },
        {
          "emoji": "🏋️",
          "name": "Cylindrical masses"
        },
        {
          "emoji": "🪝",
          "name": "S-hooks"
        },
        {
          "emoji": "📏",
          "name": "Scale ruler"
        }
      ],
      "observationsToRecord": [
        "Describe the equilibrium condition you observed:",
        "What happened when you moved the masses further from the fulcrum?"
      ],
      "theoryPoints": [
        "A lever amplifies force by trading distance — push farther from the fulcrum to lift heavier loads.",
        "The fulcrum position determines the lever class; Class 1 places the fulcrum between effort and load.",
        "Moment (torque) = Force × distance. Equilibrium means clockwise moments equal anticlockwise moments."
      ],
      "realWorldConnections": [
        "Seesaw on a playground",
        "Crowbar opening a crate",
        "Scissors and pliers"
      ],
      "formula": "M = F × d   |   F₁ × d₁ = F₂ × d₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "If a 10 g mass is 20 cm from the fulcrum, what mass 10 cm away balances it?",
          "options": [
            "A. 5 g",
            "B. 10 g",
            "C. 20 g",
            "D. 40 g"
          ],
          "correctIndex": 2,
          "explanation": "F₁×d₁ = F₂×d₂ → 10×20 = m×10 → m = 20 g"
        },
        {
          "text": "In a Class 1 lever, where is the fulcrum?",
          "options": [
            "A. At one end",
            "B. Between effort and load",
            "C. At the load end",
            "D. Outside the bar"
          ],
          "correctIndex": 1,
          "explanation": "Class 1 always has the fulcrum between the effort force and the resistance load."
        }
      ],
      "discussion": [
        "What would happen on the Moon?",
        "Why is a see-saw a first-class lever?",
        "Why is it easier to open a door from the handle than the hinge?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 45
        },
        {
          "label": "Scientific Method",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Real-World Applications",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Mass ≠ Weight. Mass is constant everywhere; weight depends on gravity (W = mg).",
        "Equal arms don't guarantee equilibrium — masses must be equal too."
      ],
      "hook": "Archimedes claimed he could move the Earth with a long enough lever — he wasn't joking. The lever is humanity's oldest force multiplier.",
      "khanLinks": [
        {
          "title": "Introduction to Torque",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque"
        },
        {
          "title": "Torque & Angular Momentum",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Mass m (g)",
        "Weight W (N)",
        "Notes"
      ],
      "rows": 5
    },
    "observations": [
      "Describe the equilibrium condition you observed:",
      "What happened when you moved the masses further from the fulcrum?"
    ],
    "conclusion": "State the relationship between force, mass and distance from the fulcrum (lever principle):",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>First class levers</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Pre-set balance with equal arms</li><li>Test that S-hooks are not bent</li><li>Check tare cylinder threads</li></ol>Time needed: 5 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Students forgetting tare operation</li><li>Reading balance scale at angle</li><li>Confusing mass (g) with weight (N)</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>M = F × d &nbsp;&nbsp;|&nbsp;&nbsp; F₁ × d₁ = F₂ × d₂</div>A lever amplifies force by trading distance — push farther from the fulcrum to lift heavier loads.",
        "question": "Discussion questions for students:<ul><li>What would happen on the Moon?</li><li>Why is a see-saw a first-class lever?</li><li>Why is it easier to open a door from the handle than the hinge?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Mass ≠ Weight. Mass is constant everywhere; weight depends on gravity (W = mg).</li><li>❌ Equal arms don't guarantee equilibrium — masses must be equal too.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Seesaw on a playground</li><li>🌍 Crowbar opening a crate</li><li>🌍 Scissors and pliers</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Weight (N) should be approximately mass(g) × 0.00981. Equilibrium occurs when moments balance.<br><br>m=10g → W≈0.098N; m=25g → W≈0.245N; m=50g → W≈0.490N",
        "extend": "Extension activity: Have students calculate the weight of classroom objects and verify with dynamometer.",
        "explain": "Here's how to explain this to students: <em>Archimedes claimed he could move the Earth with a long enough lever — he wasn't joking. The lever is humanity's oldest force multiplier.</em><br><br>Key concepts to emphasise: A lever amplifies force by trading distance — push farther from the fulcrum to lift heavier loads.; The fulcrum position determines the lever class; Class 1 places the fulcrum between effort and load.",
        "hook": "Engaging hook for students: <blockquote>Archimedes claimed he could move the Earth with a long enough lever — he wasn't joking. The lever is humanity's oldest force multiplier.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Weight (N) should be approximately mass(g) × 0.00981. Equilibrium occurs when moments balance.",
      "expected": "m=10g → W≈0.098N; m=25g → W≈0.245N; m=50g → W≈0.490N"
    }
  },
  {
    "num": 2,
    "title": "First class levers and equilibrium positions",
    "section": "Mechanics",
    "desc": "Analyzes first-class levers where the fulcrum lies between effort and load.",
    "setupTime": "5 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Analyzes first-class levers where the fulcrum lies between effort and load.",
      "instructions": [
        "At equilibrium, were M₁ and M₂ equal? Describe any differences:",
        "How did moving the fulcrum position affect equilibrium?",
        "Verify the principle of moments: ΣM_clockwise = ΣM_anticlockwise. State your conclusion:"
      ],
      "expectedOutcome": "At equilibrium, M₁ ≈ M₂. Typical values: m₁=0.065kg, m₂=0.060kg, a₁=0.08m, a₂=0.10m → M₁≈0.051, M₂≈0.059 N·m M₁ = M₂ at equilibrium. Values within 5–10% error are acceptable."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Lever bar"
        },
        {
          "emoji": "🔩",
          "name": "Fulcrum"
        },
        {
          "emoji": "🏋️",
          "name": "Mass set"
        },
        {
          "emoji": "🪝",
          "name": "S-hooks"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        }
      ],
      "observationsToRecord": [
        "At equilibrium, were M₁ and M₂ equal? Describe any differences:",
        "How did moving the fulcrum position affect equilibrium?"
      ],
      "theoryPoints": [
        "Moving masses along a lever arm changes the torque without changing the force magnitude.",
        "Equilibrium requires zero net torque: ΣM_clockwise = ΣM_anticlockwise.",
        "The mechanical advantage equals the ratio of effort arm to load arm."
      ],
      "realWorldConnections": [
        "Steelyard scales in markets",
        "Adjustable bike brakes",
        "Trebuchet siege engines"
      ],
      "formula": "MA = d_effort / d_load   |   Σ(F × d) = 0"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two masses 50 g and 25 g are on opposite sides. The 50 g is 4 cm from fulcrum. How far must 25 g be to balance?",
          "options": [
            "A. 2 cm",
            "B. 4 cm",
            "C. 8 cm",
            "D. 16 cm"
          ],
          "correctIndex": 2,
          "explanation": "50×4 = 25×d → d = 200/25 = 8 cm"
        },
        {
          "text": "What is the unit of moment of a force?",
          "options": [
            "A. Newton",
            "B. Joule",
            "C. Newton·metre",
            "D. Pascal"
          ],
          "correctIndex": 2,
          "explanation": "Moment = Force × distance = N × m = Newton·metre"
        }
      ],
      "discussion": [
        "If both arms are extended, what happens to sensitivity?",
        "Why is a heavier balance not necessarily more accurate?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 40
        },
        {
          "label": "Data Analysis",
          "pct": 30
        },
        {
          "label": "Scientific Method",
          "pct": 20
        },
        {
          "label": "Measurement",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Mechanical advantage > 1 doesn't mean you get 'free' energy — you trade distance for force.",
        "The principle of moments applies even when arms are unequal."
      ],
      "hook": "A Roman steelyard, a car's brake pedal, and a trebuchet catapult all exploit the same lever principle — precise placement of masses.",
      "khanLinks": [
        {
          "title": "Introduction to Torque",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum/torque-tutorial/v/introduction-to-torque"
        },
        {
          "title": "Torque & Moments",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "m₁ (kg)",
        "m₂ (kg)",
        "a₁ (m)",
        "a₂ (m)",
        "M₁ = m₁ga₁ (N·m)",
        "M₂ = m₂ga₂ (N·m)"
      ],
      "rows": 4
    },
    "observations": [
      "At equilibrium, were M₁ and M₂ equal? Describe any differences:",
      "How did moving the fulcrum position affect equilibrium?"
    ],
    "conclusion": "Verify the principle of moments: ΣM_clockwise = ΣM_anticlockwise. State your conclusion:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>First class levers and equilibrium positions</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Prepare at least 4 different mass combinations</li><li>Mark positions on lever with tape</li><li>Ensure fulcrum pivot is smooth</li></ol>Time needed: 5 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Measuring distance from end of bar, not fulcrum</li><li>Not achieving true equilibrium before recording</li><li>Using grams instead of kg in moment calculation</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>MA = d_effort / d_load &nbsp;&nbsp;|&nbsp;&nbsp; Σ(F × d) = 0</div>Moving masses along a lever arm changes the torque without changing the force magnitude.",
        "question": "Discussion questions for students:<ul><li>If both arms are extended, what happens to sensitivity?</li><li>Why is a heavier balance not necessarily more accurate?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Mechanical advantage > 1 doesn't mean you get 'free' energy — you trade distance for force.</li><li>❌ The principle of moments applies even when arms are unequal.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Steelyard scales in markets</li><li>🌍 Adjustable bike brakes</li><li>🌍 Trebuchet siege engines</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: At equilibrium, M₁ ≈ M₂. Typical values: m₁=0.065kg, m₂=0.060kg, a₁=0.08m, a₂=0.10m → M₁≈0.051, M₂≈0.059 N·m<br><br>M₁ = M₂ at equilibrium. Values within 5–10% error are acceptable.",
        "extend": "Extension activity: Challenge students to balance 3 masses simultaneously.",
        "explain": "Here's how to explain this to students: <em>A Roman steelyard, a car's brake pedal, and a trebuchet catapult all exploit the same lever principle — precise placement of masses.</em><br><br>Key concepts to emphasise: Moving masses along a lever arm changes the torque without changing the force magnitude.; Equilibrium requires zero net torque: ΣM_clockwise = ΣM_anticlockwise.",
        "hook": "Engaging hook for students: <blockquote>A Roman steelyard, a car's brake pedal, and a trebuchet catapult all exploit the same lever principle — precise placement of masses.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "At equilibrium, M₁ ≈ M₂. Typical values: m₁=0.065kg, m₂=0.060kg, a₁=0.08m, a₂=0.10m → M₁≈0.051, M₂≈0.059 N·m",
      "expected": "M₁ = M₂ at equilibrium. Values within 5–10% error are acceptable."
    }
  },
  {
    "num": 3,
    "title": "Sensitivity of a balance",
    "section": "Mechanics",
    "desc": "Applies slightly different masses to evaluate the smallest measurable mass difference.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Applies slightly different masses to evaluate the smallest measurable mass difference.",
      "instructions": [
        "How did increasing the load M affect sensitivity?",
        "Describe the tare operation and why it was necessary:",
        "Is sensitivity constant for this balance? Explain your observations:"
      ],
      "expectedOutcome": "Sensitivity S = deflection/added_mass. With M=10g and m=310mg giving 3 div, S≈0.01 div/mg. Sensitivity typically decreases with load. S is not constant. Higher load M → lower sensitivity. Typical S ≈ 0.01–0.05 div/mg."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Double-sided scale"
        },
        {
          "emoji": "🏋️",
          "name": "Fine masses (0.3–100 g)"
        },
        {
          "emoji": "🔩",
          "name": "Threaded stem"
        },
        {
          "emoji": "📏",
          "name": "Scale pointer"
        }
      ],
      "observationsToRecord": [
        "How did increasing the load M affect sensitivity?",
        "Describe the tare operation and why it was necessary:"
      ],
      "theoryPoints": [
        "Sensitivity of a balance: the smallest mass difference that causes a measurable deflection.",
        "Higher sensitivity means smaller mass differences are detectable, but it can reduce stability.",
        "The centre of mass position governs balance behaviour — lower CoM = more stable, less sensitive."
      ],
      "realWorldConnections": [
        "Pharmacy scales for drug compounding",
        "Jewellery scales measuring carats",
        "Lab analytical balances"
      ],
      "formula": "S = θ / m    (deflection per unit added mass)"
    },
    "questions": {
      "mcq": [
        {
          "text": "What does 'tare' a balance mean?",
          "options": [
            "A. Zero it with the pans empty",
            "B. Add a counterweight to achieve equilibrium before measuring",
            "C. Remove the scale pans",
            "D. Increase sensitivity"
          ],
          "correctIndex": 1,
          "explanation": "Taring adds a small counterweight to account for the balance arm's own mass asymmetry."
        },
        {
          "text": "If adding 1 mg causes a 5-division deflection, what is the sensitivity?",
          "options": [
            "A. 0.2 div/mg",
            "B. 5 div/mg",
            "C. 1 div/mg",
            "D. 10 div/mg"
          ],
          "correctIndex": 1,
          "explanation": "S = deflection/mass = 5 div / 1 mg = 5 div/mg"
        }
      ],
      "discussion": [
        "Why would a chemist need a more sensitive balance than a butcher?",
        "How does temperature affect balance sensitivity?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 35
        },
        {
          "label": "Measurement",
          "pct": 35
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "A 'sensitive' balance isn't always better — it may be too unstable for rough environments.",
        "Tare operation is not just zeroing; it corrects for the arm's own weight asymmetry."
      ],
      "hook": "An analytical balance can detect a difference of 0.1 mg — less than a grain of sand. Its sensitivity is a masterpiece of physics.",
      "khanLinks": [
        {
          "title": "Forces & Newton's Laws",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        },
        {
          "title": "Torque & Balance",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Load M (g)",
        "Added mass m (mg)",
        "Deflection (div)",
        "Sensitivity (div/mg)"
      ],
      "rows": 5
    },
    "observations": [
      "How did increasing the load M affect sensitivity?",
      "Describe the tare operation and why it was necessary:"
    ],
    "conclusion": "Is sensitivity constant for this balance? Explain your observations:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Sensitivity of a balance</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Pre-calibrate balance for equal arms</li><li>Prepare small masses: 0.5g, 0.3g, 0.1g</li><li>Have pointer positioned correctly</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Not completing tare before starting</li><li>Misreading scale divisions</li><li>Applying masses too quickly causing oscillation</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>S = θ / m &nbsp;&nbsp; (deflection per unit added mass)</div>Sensitivity of a balance: the smallest mass difference that causes a measurable deflection.",
        "question": "Discussion questions for students:<ul><li>Why would a chemist need a more sensitive balance than a butcher?</li><li>How does temperature affect balance sensitivity?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ A 'sensitive' balance isn't always better — it may be too unstable for rough environments.</li><li>❌ Tare operation is not just zeroing; it corrects for the arm's own weight asymmetry.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Pharmacy scales for drug compounding</li><li>🌍 Jewellery scales measuring carats</li><li>🌍 Lab analytical balances</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Sensitivity S = deflection/added_mass. With M=10g and m=310mg giving 3 div, S≈0.01 div/mg. Sensitivity typically decreases with load.<br><br>S is not constant. Higher load M → lower sensitivity. Typical S ≈ 0.01–0.05 div/mg.",
        "extend": "Extension activity: Compare sensitivity with different arm lengths.",
        "explain": "Here's how to explain this to students: <em>An analytical balance can detect a difference of 0.1 mg — less than a grain of sand. Its sensitivity is a masterpiece of physics.</em><br><br>Key concepts to emphasise: Sensitivity of a balance: the smallest mass difference that causes a measurable deflection.; Higher sensitivity means smaller mass differences are detectable, but it can reduce stability.",
        "hook": "Engaging hook for students: <blockquote>An analytical balance can detect a difference of 0.1 mg — less than a grain of sand. Its sensitivity is a masterpiece of physics.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Sensitivity S = deflection/added_mass. With M=10g and m=310mg giving 3 div, S≈0.01 div/mg. Sensitivity typically decreases with load.",
      "expected": "S is not constant. Higher load M → lower sensitivity. Typical S ≈ 0.01–0.05 div/mg."
    }
  },
  {
    "num": 4,
    "title": "Second and third class levers",
    "section": "Mechanics",
    "desc": "Compares all three lever classes and their mechanical advantages.",
    "setupTime": "5 min",
    "duration": "25 min",
    "summary": {
      "whatTheyLearn": "Compares all three lever classes and their mechanical advantages.",
      "instructions": [
        "For each lever class, describe the position of the fulcrum, effort, and load:",
        "Which class gave the highest mechanical advantage? Why?",
        "Compare the three lever classes. When would you choose each type?"
      ],
      "expectedOutcome": "Class 2: MA > 1 (wheelbarrow-type). Class 3: MA < 1 (forearm-type). MA = effort arm / load arm. Class 2 MA > 1; Class 3 MA < 1; Class 1 MA can be =, > or < 1 depending on fulcrum position."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚖️",
          "name": "Lever apparatus"
        },
        {
          "emoji": "🏋️",
          "name": "Mass set"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "⚖️",
          "name": "Dynamometer"
        }
      ],
      "observationsToRecord": [
        "For each lever class, describe the position of the fulcrum, effort, and load:",
        "Which class gave the highest mechanical advantage? Why?"
      ],
      "theoryPoints": [
        "Class 2 lever: load between fulcrum and effort — always has MA > 1 (wheelbarrow, nutcracker).",
        "Class 3 lever: effort between fulcrum and load — always gives MA < 1 but gains in speed/distance (tweezers, fishing rod).",
        "Trade-off: mechanical advantage vs range of motion and speed."
      ],
      "realWorldConnections": [
        "Wheelbarrow (Class 2)",
        "Forearm/bicep (Class 3)",
        "Bottle opener (Class 2)",
        "Fishing rod (Class 3)"
      ],
      "formula": "Class 2: MA > 1  |  Class 3: MA < 1  |  MA = d_effort/d_load"
    },
    "questions": {
      "mcq": [
        {
          "text": "In a wheelbarrow, where is the fulcrum?",
          "options": [
            "A. At the handles",
            "B. At the wheel axle",
            "C. Under the load",
            "D. In the middle"
          ],
          "correctIndex": 1,
          "explanation": "The wheel axle is the fulcrum; load sits between it and the effort at the handles → Class 2."
        },
        {
          "text": "Tweezers are an example of which lever class?",
          "options": [
            "A. Class 1",
            "B. Class 2",
            "C. Class 3",
            "D. None of the above"
          ],
          "correctIndex": 2,
          "explanation": "In tweezers, effort (fingers) is between the fulcrum (pivot end) and the load (tip) → Class 3."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 50
        },
        {
          "label": "Scientific Method",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Class 3 levers are not 'inefficient' — they trade force for speed, useful in muscle-driven motion.",
        "The fulcrum of a Class 2 lever is at one end, not in the middle."
      ],
      "hook": "Your forearm is a Class 3 lever — your bicep pulls near your elbow to lift your hand far away. The human body is a lever machine.",
      "khanLinks": [
        {
          "title": "Torque & Angular Momentum",
          "url": "https://www.khanacademy.org/science/physics/torque-angular-momentum"
        },
        {
          "title": "AP Physics 1: Forces",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Lever Class",
        "Effort arm (m)",
        "Load arm (m)",
        "Mechanical Advantage",
        "Effort F (N)",
        "Load W (N)"
      ],
      "rows": 4
    },
    "observations": [
      "For each lever class, describe the position of the fulcrum, effort, and load:",
      "Which class gave the highest mechanical advantage? Why?"
    ],
    "conclusion": "Compare the three lever classes. When would you choose each type?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Second and third class levers</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 25 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Class 2: MA > 1 &nbsp;|&nbsp; Class 3: MA < 1 &nbsp;|&nbsp; MA = d_effort/d_load</div>Class 2 lever: load between fulcrum and effort — always has MA > 1 (wheelbarrow, nutcracker).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Class 3 levers are not 'inefficient' — they trade force for speed, useful in muscle-driven motion.</li><li>❌ The fulcrum of a Class 2 lever is at one end, not in the middle.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Wheelbarrow (Class 2)</li><li>🌍 Forearm/bicep (Class 3)</li><li>🌍 Bottle opener (Class 2)</li><li>🌍 Fishing rod (Class 3)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Class 2: MA > 1 (wheelbarrow-type). Class 3: MA < 1 (forearm-type). MA = effort arm / load arm.<br><br>Class 2 MA > 1; Class 3 MA < 1; Class 1 MA can be =, > or < 1 depending on fulcrum position.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Your forearm is a Class 3 lever — your bicep pulls near your elbow to lift your hand far away. The human body is a lever machine.</em><br><br>Key concepts to emphasise: Class 2 lever: load between fulcrum and effort — always has MA > 1 (wheelbarrow, nutcracker).; Class 3 lever: effort between fulcrum and load — always gives MA < 1 but gains in speed/distance (tweezers, fishing rod).",
        "hook": "Engaging hook for students: <blockquote>Your forearm is a Class 3 lever — your bicep pulls near your elbow to lift your hand far away. The human body is a lever machine.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Class 2: MA > 1 (wheelbarrow-type). Class 3: MA < 1 (forearm-type). MA = effort arm / load arm.",
      "expected": "Class 2 MA > 1; Class 3 MA < 1; Class 1 MA can be =, > or < 1 depending on fulcrum position."
    }
  },
  {
    "num": 5,
    "title": "Measurement of a length",
    "section": "Mechanics",
    "desc": "Introduces measurement instruments and significant figures in length measurement.",
    "setupTime": "3 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Introduces measurement instruments and significant figures in length measurement.",
      "instructions": [
        "Which instrument was most precise for each measurement? Why?",
        "How did repeating measurements affect your confidence in the result?",
        "State your final results with uncertainties. What are the main sources of error?"
      ],
      "expectedOutcome": "Ruler: ±0.5mm; Vernier: ±0.1mm; Micrometre: ±0.01mm. Report as: value ± uncertainty. Example: length = 45.3 ± 0.1 mm (Vernier caliper, 5 repeats)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "📏",
          "name": "Metre ruler"
        },
        {
          "emoji": "🔧",
          "name": "Vernier calliper"
        },
        {
          "emoji": "🔩",
          "name": "Micrometre gauge"
        },
        {
          "emoji": "📋",
          "name": "Data table sheet"
        }
      ],
      "observationsToRecord": [
        "Which instrument was most precise for each measurement? Why?",
        "How did repeating measurements affect your confidence in the result?"
      ],
      "theoryPoints": [
        "Significant figures reflect the precision of the measuring instrument.",
        "Vernier callipers achieve 0.1 mm precision; micrometres reach 0.01 mm.",
        "Every measurement has an uncertainty — it should always be reported (e.g., 12.3 ± 0.1 cm)."
      ],
      "realWorldConnections": [
        "Manufacturing tolerances in car engines",
        "Medical implant sizing",
        "Forensic evidence measurement"
      ],
      "formula": "% error = |measured − true| / true × 100%"
    },
    "questions": {
      "mcq": [
        {
          "text": "A ruler has 1 mm markings. What is its uncertainty?",
          "options": [
            "A. ±1 mm",
            "B. ±0.5 mm",
            "C. ±0.1 mm",
            "D. ±2 mm"
          ],
          "correctIndex": 1,
          "explanation": "Convention: uncertainty = half the smallest division = ±0.5 mm."
        },
        {
          "text": "Which instrument measures length most precisely?",
          "options": [
            "A. Metre ruler",
            "B. Vernier calliper",
            "C. Micrometre screw gauge",
            "D. Tape measure"
          ],
          "correctIndex": 2,
          "explanation": "A micrometre reads to 0.01 mm, finer than a vernier (0.1 mm) or ruler (0.5–1 mm)."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Measurement",
          "pct": 60
        },
        {
          "label": "Data Analysis",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 15
        }
      ],
      "misconceptions": [
        "More decimal places ≠ more accurate. Accuracy means closeness to the true value; precision means repeatability.",
        "The last digit of any measurement is always an estimate."
      ],
      "hook": "A human hair is ~70 micrometres wide. Without measurement science, we couldn't manufacture a single microchip, engine, or medical device.",
      "khanLinks": [
        {
          "title": "Significant Figures",
          "url": "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:sig-figs/v/significant-figures"
        },
        {
          "title": "Physics: Units & Measurement",
          "url": "https://www.khanacademy.org/science/physics/one-dimensional-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Object",
        "Instrument used",
        "Measurement (mm)",
        "Uncertainty (±mm)",
        "No. of repeats",
        "Average (mm)"
      ],
      "rows": 5
    },
    "observations": [
      "Which instrument was most precise for each measurement? Why?",
      "How did repeating measurements affect your confidence in the result?"
    ],
    "conclusion": "State your final results with uncertainties. What are the main sources of error?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Measurement of a length</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 3 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>% error = |measured − true| / true × 100%</div>Significant figures reflect the precision of the measuring instrument.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ More decimal places ≠ more accurate. Accuracy means closeness to the true value; precision means repeatability.</li><li>❌ The last digit of any measurement is always an estimate.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Manufacturing tolerances in car engines</li><li>🌍 Medical implant sizing</li><li>🌍 Forensic evidence measurement</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Ruler: ±0.5mm; Vernier: ±0.1mm; Micrometre: ±0.01mm. Report as: value ± uncertainty.<br><br>Example: length = 45.3 ± 0.1 mm (Vernier caliper, 5 repeats).",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A human hair is ~70 micrometres wide. Without measurement science, we couldn't manufacture a single microchip, engine, or medical device.</em><br><br>Key concepts to emphasise: Significant figures reflect the precision of the measuring instrument.; Vernier callipers achieve 0.1 mm precision; micrometres reach 0.01 mm.",
        "hook": "Engaging hook for students: <blockquote>A human hair is ~70 micrometres wide. Without measurement science, we couldn't manufacture a single microchip, engine, or medical device.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Ruler: ±0.5mm; Vernier: ±0.1mm; Micrometre: ±0.01mm. Report as: value ± uncertainty.",
      "expected": "Example: length = 45.3 ± 0.1 mm (Vernier caliper, 5 repeats)."
    }
  },
  {
    "num": 6,
    "title": "Measurement of density",
    "section": "Mechanics",
    "desc": "Uses the water displacement method to determine density of irregular objects.",
    "setupTime": "5 min",
    "duration": "35 min",
    "summary": {
      "whatTheyLearn": "Uses the water displacement method to determine density of irregular objects.",
      "instructions": [
        "How did you measure the volume of irregular objects?",
        "Did any material float? What does that tell you about its density relative to water?",
        "Compare measured densities with known values. Identify sources of error:"
      ],
      "expectedOutcome": "Water=1.0, Aluminium≈2.7, Iron≈7.9, Copper≈8.9, Lead≈11.3 g/cm³. Error > 10% suggests volume measurement issues. ρ = m/V. Common errors: air bubbles in water displacement, meniscus reading, mass scale precision."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚗️",
          "name": "Graduated cylinder"
        },
        {
          "emoji": "💧",
          "name": "Water"
        },
        {
          "emoji": "🏋️",
          "name": "Mass balance"
        },
        {
          "emoji": "🔩",
          "name": "Various solid samples"
        }
      ],
      "observationsToRecord": [
        "How did you measure the volume of irregular objects?",
        "Did any material float? What does that tell you about its density relative to water?"
      ],
      "theoryPoints": [
        "Density ρ = mass/volume, measured in kg/m³ or g/cm³.",
        "For irregular solids, volume is found by water displacement (Archimedes method).",
        "Density is an intensive property — it doesn't change with amount of material."
      ],
      "realWorldConnections": [
        "Checking purity of metals (gold vs fake)",
        "Why ships float (hull displaces water)",
        "Hydrometer in car batteries"
      ],
      "formula": "ρ = m / V   |   V_displaced = V_object"
    },
    "questions": {
      "mcq": [
        {
          "text": "An object has mass 80 g and volume 10 cm³. What is its density?",
          "options": [
            "A. 8 g/cm³",
            "B. 0.8 g/cm³",
            "C. 800 g/cm³",
            "D. 0.125 g/cm³"
          ],
          "correctIndex": 0,
          "explanation": "ρ = m/V = 80/10 = 8 g/cm³"
        },
        {
          "text": "A block sinks in water (ρ=1 g/cm³). What can you conclude?",
          "options": [
            "A. Its density > 1 g/cm³",
            "B. Its density = 1 g/cm³",
            "D. Its mass > 1 g"
          ],
          "correctIndex": 0,
          "explanation": "Objects sink when their density exceeds the fluid's density (ρ_object > ρ_fluid)."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 35
        },
        {
          "label": "Measurement",
          "pct": 30
        },
        {
          "label": "Data Analysis",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Heavier ≠ denser. A mountain weighs more than a pebble of gold, but gold is denser.",
        "An object sinks if its density is greater than the fluid's density, regardless of its mass."
      ],
      "hook": "Archimedes discovered density when asked to check if a crown was pure gold — without melting it. He ran through Syracuse shouting 'Eureka!'",
      "khanLinks": [
        {
          "title": "Density: A Fundamental Concept",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/density/v/density-a-fundamental-concept"
        },
        {
          "title": "States of Matter & Density",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/density"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Object/Material",
        "Mass m (g)",
        "Volume V (cm³)",
        "Density ρ (g/cm³)",
        "Expected ρ (g/cm³)",
        "% Error"
      ],
      "rows": 5
    },
    "observations": [
      "How did you measure the volume of irregular objects?",
      "Did any material float? What does that tell you about its density relative to water?"
    ],
    "conclusion": "Compare measured densities with known values. Identify sources of error:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Measurement of density</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 35 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>ρ = m / V &nbsp;&nbsp;|&nbsp;&nbsp; V_displaced = V_object</div>Density ρ = mass/volume, measured in kg/m³ or g/cm³.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Heavier ≠ denser. A mountain weighs more than a pebble of gold, but gold is denser.</li><li>❌ An object sinks if its density is greater than the fluid's density, regardless of its mass.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Checking purity of metals (gold vs fake)</li><li>🌍 Why ships float (hull displaces water)</li><li>🌍 Hydrometer in car batteries</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Water=1.0, Aluminium≈2.7, Iron≈7.9, Copper≈8.9, Lead≈11.3 g/cm³. Error > 10% suggests volume measurement issues.<br><br>ρ = m/V. Common errors: air bubbles in water displacement, meniscus reading, mass scale precision.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Archimedes discovered density when asked to check if a crown was pure gold — without melting it. He ran through Syracuse shouting 'Eureka!'</em><br><br>Key concepts to emphasise: Density ρ = mass/volume, measured in kg/m³ or g/cm³.; For irregular solids, volume is found by water displacement (Archimedes method).",
        "hook": "Engaging hook for students: <blockquote>Archimedes discovered density when asked to check if a crown was pure gold — without melting it. He ran through Syracuse shouting 'Eureka!'</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Water=1.0, Aluminium≈2.7, Iron≈7.9, Copper≈8.9, Lead≈11.3 g/cm³. Error > 10% suggests volume measurement issues.",
      "expected": "ρ = m/V. Common errors: air bubbles in water displacement, meniscus reading, mass scale precision."
    }
  },
  {
    "num": 8,
    "title": "Composition and decomposition of forces",
    "section": "Mechanics",
    "desc": "Demonstrates vector addition of parallel and non-parallel forces on a force board.",
    "setupTime": "8 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Demonstrates vector addition of parallel and non-parallel forces on a force board.",
      "instructions": [
        "Describe how you set up the force board to find the resultant:",
        "What happened to the resultant when the angle between forces increased to 180°?",
        "Does vector addition accurately predict the resultant force? State your conclusion with evidence:"
      ],
      "expectedOutcome": "Use parallelogram law. At 90°: R=√(F₁²+F₂²). At 0°: R=F₁+F₂. At 180°: R=|F₁-F₂|. Typical accuracy: ±5%. Main error: reading spring dynamometer at an angle."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔀",
          "name": "Force board"
        },
        {
          "emoji": "📏",
          "name": "Protractor"
        },
        {
          "emoji": "⚖️",
          "name": "Spring dynamometers x3"
        },
        {
          "emoji": "🖊️",
          "name": "Graph paper"
        }
      ],
      "observationsToRecord": [
        "Describe how you set up the force board to find the resultant:",
        "What happened to the resultant when the angle between forces increased to 180°?"
      ],
      "theoryPoints": [
        "Forces are vectors: they have both magnitude and direction.",
        "The resultant of two parallel forces points in the same direction and equals their sum.",
        "Forces can be decomposed into perpendicular components (Fx = F cosθ, Fy = F sinθ)."
      ],
      "realWorldConnections": [
        "Sailing: combining wind and keel forces",
        "Structural engineering (roof trusses)",
        "Aircraft: lift, drag, thrust, weight"
      ],
      "formula": "F_R = √(Fx² + Fy²)   |   θ = arctan(Fy/Fx)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two forces of 3N and 4N act at right angles. What is their resultant?",
          "options": [
            "A. 1N",
            "B. 5N",
            "C. 7N",
            "D. 12N"
          ],
          "correctIndex": 1,
          "explanation": "R = √(3² + 4²) = √25 = 5N (Pythagoras)"
        },
        {
          "text": "A force of 10N acts at 30° to horizontal. What is its horizontal component?",
          "options": [
            "A. 5N",
            "B. 8.66N",
            "C. 10N",
            "D. 3.66N"
          ],
          "correctIndex": 1,
          "explanation": "Fx = F·cos30° = 10 × 0.866 = 8.66N"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 50
        },
        {
          "label": "Mathematics",
          "pct": 30
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 5
        }
      ],
      "misconceptions": [
        "Forces cannot simply be added as numbers — direction matters. 3N + 4N can equal anything from 1N to 7N.",
        "Equilibrium means net force = 0, not that no forces act."
      ],
      "hook": "Sailors used vector addition centuries before calculus existed — combining wind and current forces to navigate. Forces are vectors, not just numbers.",
      "khanLinks": [
        {
          "title": "Introduction to Vectors",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-two-dimensional-motion/representing-vectors/v/introduction-to-vectors-and-scalars"
        },
        {
          "title": "Forces & Newton's Laws",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "F₁ (N)",
        "F₂ (N)",
        "Angle θ (°)",
        "Resultant Measured (N)",
        "Resultant Calculated (N)",
        "% Difference"
      ],
      "rows": 4
    },
    "observations": [
      "Describe how you set up the force board to find the resultant:",
      "What happened to the resultant when the angle between forces increased to 180°?"
    ],
    "conclusion": "Does vector addition accurately predict the resultant force? State your conclusion with evidence:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Composition and decomposition of forces</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 8 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>F_R = √(Fx² + Fy²) &nbsp;&nbsp;|&nbsp;&nbsp; θ = arctan(Fy/Fx)</div>Forces are vectors: they have both magnitude and direction.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Forces cannot simply be added as numbers — direction matters. 3N + 4N can equal anything from 1N to 7N.</li><li>❌ Equilibrium means net force = 0, not that no forces act.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Sailing: combining wind and keel forces</li><li>🌍 Structural engineering (roof trusses)</li><li>🌍 Aircraft: lift, drag, thrust, weight</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Use parallelogram law. At 90°: R=√(F₁²+F₂²). At 0°: R=F₁+F₂. At 180°: R=|F₁-F₂|.<br><br>Typical accuracy: ±5%. Main error: reading spring dynamometer at an angle.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Sailors used vector addition centuries before calculus existed — combining wind and current forces to navigate. Forces are vectors, not just numbers.</em><br><br>Key concepts to emphasise: Forces are vectors: they have both magnitude and direction.; The resultant of two parallel forces points in the same direction and equals their sum.",
        "hook": "Engaging hook for students: <blockquote>Sailors used vector addition centuries before calculus existed — combining wind and current forces to navigate. Forces are vectors, not just numbers.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Use parallelogram law. At 90°: R=√(F₁²+F₂²). At 0°: R=F₁+F₂. At 180°: R=|F₁-F₂|.",
      "expected": "Typical accuracy: ±5%. Main error: reading spring dynamometer at an angle."
    }
  },
  {
    "num": 9,
    "title": "Fixed Pulleys",
    "section": "Mechanics",
    "desc": "Shows how a fixed pulley redirects force without providing mechanical advantage.",
    "setupTime": "5 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Shows how a fixed pulley redirects force without providing mechanical advantage.",
      "instructions": [
        "Was the effort force equal to, less than, or greater than the load? Explain:",
        "How does the direction of pulling change with a fixed pulley?",
        "State the mechanical advantage of a fixed pulley. How does friction affect the result?"
      ],
      "expectedOutcome": "Ideal MA=1. Real MA slightly < 1 due to friction. Effort ≈ Load for ideal system. Efficiency = (W/F) × 100%. Expected MA ≈ 0.9–1.0. Efficiency ≈ 85–95%. Effort slightly > Load due to friction."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⛓️",
          "name": "Fixed pulley"
        },
        {
          "emoji": "⚖️",
          "name": "Dynamometer"
        },
        {
          "emoji": "🏋️",
          "name": "Masses"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🧵",
          "name": "Rope"
        }
      ],
      "observationsToRecord": [
        "Was the effort force equal to, less than, or greater than the load? Explain:",
        "How does the direction of pulling change with a fixed pulley?"
      ],
      "theoryPoints": [
        "A fixed pulley changes direction of force but provides no mechanical advantage (MA = 1).",
        "The tension throughout an ideal (massless, frictionless) rope is constant.",
        "Fixed pulleys are used to redirect force to a more convenient direction."
      ],
      "realWorldConnections": [
        "Flagpoles",
        "Sailing rigging",
        "Gym cable machines (direction change)",
        "Theatre fly systems"
      ],
      "formula": "MA = 1   |   F_effort = F_load (ideal)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A fixed pulley lifts a 20N weight. What effort force is needed (ideal)?",
          "options": [
            "A. 10N",
            "B. 20N",
            "C. 40N",
            "D. 5N"
          ],
          "correctIndex": 1,
          "explanation": "MA = 1 for a fixed pulley, so effort = load = 20N"
        },
        {
          "text": "What does a fixed pulley change?",
          "options": [
            "A. The magnitude of force",
            "B. The direction of force",
            "C. The work done",
            "D. The speed"
          ],
          "correctIndex": 1,
          "explanation": "A fixed pulley redirects force but doesn't reduce it."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 45
        },
        {
          "label": "Energy Transfer",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "A fixed pulley does NOT reduce the force needed — it only changes direction.",
        "Friction in real pulleys means effort > load even in a 'fixed' pulley."
      ],
      "hook": "A single pulley above a flagpole changes the direction of force — you pull down to raise the flag up. Simple, elegant, and essential.",
      "khanLinks": [
        {
          "title": "Work & Energy",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "Forces & Newton's Laws",
          "url": "https://www.khanacademy.org/science/physics/forces-newtons-laws"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Load W (N)",
        "Effort F (N)",
        "Distance load raised (cm)",
        "Distance rope pulled (cm)",
        "MA = W/F",
        "Efficiency (%)"
      ],
      "rows": 4
    },
    "observations": [
      "Was the effort force equal to, less than, or greater than the load? Explain:",
      "How does the direction of pulling change with a fixed pulley?"
    ],
    "conclusion": "State the mechanical advantage of a fixed pulley. How does friction affect the result?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Fixed Pulleys</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>MA = 1 &nbsp;&nbsp;|&nbsp;&nbsp; F_effort = F_load (ideal)</div>A fixed pulley changes direction of force but provides no mechanical advantage (MA = 1).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ A fixed pulley does NOT reduce the force needed — it only changes direction.</li><li>❌ Friction in real pulleys means effort > load even in a 'fixed' pulley.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Flagpoles</li><li>🌍 Sailing rigging</li><li>🌍 Gym cable machines (direction change)</li><li>🌍 Theatre fly systems</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Ideal MA=1. Real MA slightly < 1 due to friction. Effort ≈ Load for ideal system. Efficiency = (W/F) × 100%.<br><br>Expected MA ≈ 0.9–1.0. Efficiency ≈ 85–95%. Effort slightly > Load due to friction.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A single pulley above a flagpole changes the direction of force — you pull down to raise the flag up. Simple, elegant, and essential.</em><br><br>Key concepts to emphasise: A fixed pulley changes direction of force but provides no mechanical advantage (MA = 1).; The tension throughout an ideal (massless, frictionless) rope is constant.",
        "hook": "Engaging hook for students: <blockquote>A single pulley above a flagpole changes the direction of force — you pull down to raise the flag up. Simple, elegant, and essential.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Ideal MA=1. Real MA slightly < 1 due to friction. Effort ≈ Load for ideal system. Efficiency = (W/F) × 100%.",
      "expected": "Expected MA ≈ 0.9–1.0. Efficiency ≈ 85–95%. Effort slightly > Load due to friction."
    }
  },
  {
    "num": 10,
    "title": "Mobile Pulley",
    "section": "Mechanics",
    "desc": "Demonstrates how a movable pulley provides mechanical advantage of 2.",
    "setupTime": "5 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Demonstrates how a movable pulley provides mechanical advantage of 2.",
      "instructions": [
        "How many rope segments supported the load? How did this relate to MA?",
        "Compare the rope distance pulled vs load distance raised:",
        "State the mechanical advantage of a movable pulley. Why is it never exactly 2?"
      ],
      "expectedOutcome": "Ideal MA=2. Real MA ≈ 1.7–1.9 due to friction. Rope pulled ≈ 2× load raised. Expected MA ≈ 1.7–2.0. Two rope segments support load → theoretical MA=2."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⛓️",
          "name": "Movable pulley"
        },
        {
          "emoji": "⚖️",
          "name": "Dynamometer"
        },
        {
          "emoji": "🏋️",
          "name": "Masses"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🧵",
          "name": "Rope"
        }
      ],
      "observationsToRecord": [
        "How many rope segments supported the load? How did this relate to MA?",
        "Compare the rope distance pulled vs load distance raised:"
      ],
      "theoryPoints": [
        "A movable pulley provides MA = 2: the load is supported by two rope segments.",
        "Effort = Load/2 for an ideal movable pulley, but rope must move twice as far.",
        "Energy is conserved: Work = F × d is constant regardless of MA."
      ],
      "realWorldConnections": [
        "Construction cranes (block and tackle)",
        "Sailing halyards",
        "Rescue equipment"
      ],
      "formula": "MA = 2   |   F_effort = F_load / 2   |   d_effort = 2 × d_load"
    },
    "questions": {
      "mcq": [
        {
          "text": "A movable pulley lifts a 60N load. What effort is needed (ideal)?",
          "options": [
            "A. 60N",
            "B. 120N",
            "C. 30N",
            "D. 15N"
          ],
          "correctIndex": 2,
          "explanation": "MA = 2, so effort = load/2 = 60/2 = 30N"
        },
        {
          "text": "If you raise a load 1 m with a movable pulley, how much rope do you pull?",
          "options": [
            "A. 0.5 m",
            "B. 1 m",
            "C. 2 m",
            "D. 4 m"
          ],
          "correctIndex": 2,
          "explanation": "Two rope segments support the load, so rope pulled = 2 × load distance = 2 m"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 45
        },
        {
          "label": "Energy Transfer",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "More MA doesn't mean less work — the same energy is needed, just distributed over more distance.",
        "Friction in real pulleys reduces effective MA below the theoretical value."
      ],
      "hook": "A single movable pulley lets you lift a piano with half the force — you just have to pull twice the distance. This is the magic of mechanical advantage.",
      "khanLinks": [
        {
          "title": "Work & Mechanical Advantage",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "AP Physics 1: Work & Energy",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Load W (N)",
        "Effort F (N)",
        "Distance load raised (cm)",
        "Distance rope pulled (cm)",
        "MA = W/F",
        "Efficiency (%)"
      ],
      "rows": 4
    },
    "observations": [
      "How many rope segments supported the load? How did this relate to MA?",
      "Compare the rope distance pulled vs load distance raised:"
    ],
    "conclusion": "State the mechanical advantage of a movable pulley. Why is it never exactly 2?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Mobile Pulley</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>MA = 2 &nbsp;&nbsp;|&nbsp;&nbsp; F_effort = F_load / 2 &nbsp;&nbsp;|&nbsp;&nbsp; d_effort = 2 × d_load</div>A movable pulley provides MA = 2: the load is supported by two rope segments.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ More MA doesn't mean less work — the same energy is needed, just distributed over more distance.</li><li>❌ Friction in real pulleys reduces effective MA below the theoretical value.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Construction cranes (block and tackle)</li><li>🌍 Sailing halyards</li><li>🌍 Rescue equipment</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Ideal MA=2. Real MA ≈ 1.7–1.9 due to friction. Rope pulled ≈ 2× load raised.<br><br>Expected MA ≈ 1.7–2.0. Two rope segments support load → theoretical MA=2.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A single movable pulley lets you lift a piano with half the force — you just have to pull twice the distance. This is the magic of mechanical advantage.</em><br><br>Key concepts to emphasise: A movable pulley provides MA = 2: the load is supported by two rope segments.; Effort = Load/2 for an ideal movable pulley, but rope must move twice as far.",
        "hook": "Engaging hook for students: <blockquote>A single movable pulley lets you lift a piano with half the force — you just have to pull twice the distance. This is the magic of mechanical advantage.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Ideal MA=2. Real MA ≈ 1.7–1.9 due to friction. Rope pulled ≈ 2× load raised.",
      "expected": "Expected MA ≈ 1.7–2.0. Two rope segments support load → theoretical MA=2."
    }
  },
  {
    "num": 11,
    "title": "Fixed and Mobile Pulleys",
    "section": "Mechanics",
    "desc": "Combines fixed and movable pulleys to achieve higher mechanical advantage.",
    "setupTime": "8 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Combines fixed and movable pulleys to achieve higher mechanical advantage.",
      "instructions": [
        "Describe each pulley combination and its mechanical advantage:",
        "How did combining pulleys compare to single pulleys?",
        "State how the number of rope segments relates to MA. Comment on efficiency vs complexity:"
      ],
      "expectedOutcome": "MA = number of rope segments supporting load. Each added pulley increases MA but reduces efficiency. 1 fixed = MA 1; 1 movable = MA 2; 2+1 system = MA 3–4. Efficiency drops ~5–10% per added pulley."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⛓️",
          "name": "Pulley system"
        },
        {
          "emoji": "⚖️",
          "name": "Dynamometer x2"
        },
        {
          "emoji": "🏋️",
          "name": "Masses"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🧵",
          "name": "Rope"
        }
      ],
      "observationsToRecord": [
        "Describe each pulley combination and its mechanical advantage:",
        "How did combining pulleys compare to single pulleys?"
      ],
      "theoryPoints": [
        "Combining fixed and movable pulleys (block and tackle) multiplies MA.",
        "MA equals the number of rope segments supporting the load.",
        "Real systems have efficiency < 100% due to friction and rope weight."
      ],
      "realWorldConnections": [
        "Ship rigging (block and tackle)",
        "Car engine hoists (garage chains)",
        "Zip-line tensioning systems"
      ],
      "formula": "MA = n (number of rope segments)   |   efficiency = (W_out / W_in) × 100%"
    },
    "questions": {
      "mcq": [
        {
          "text": "A system has 4 rope segments supporting the load. What is the MA?",
          "options": [
            "A. 2",
            "B. 4",
            "C. 8",
            "D. 1"
          ],
          "correctIndex": 1,
          "explanation": "MA = number of supporting rope segments = 4"
        },
        {
          "text": "A pulley system has MA=3. To lift a 90N load, what effort is needed (ideal)?",
          "options": [
            "A. 270N",
            "B. 90N",
            "C. 30N",
            "D. 45N"
          ],
          "correctIndex": 2,
          "explanation": "effort = load/MA = 90/3 = 30N"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 40
        },
        {
          "label": "Energy Transfer",
          "pct": 30
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "More pulleys always increase MA but also increase friction losses.",
        "The 'free rope end' always counts as one of the supporting segments."
      ],
      "hook": "The rigging of a tall ship uses dozens of combined pulleys to let a single sailor control a 500 kg sail. Compound pulleys multiply force dramatically.",
      "khanLinks": [
        {
          "title": "Introduction to Work & Energy",
          "url": "https://www.khanacademy.org/science/physics/work-and-energy/work-and-energy-tutorial/v/introduction-to-work-and-energy"
        },
        {
          "title": "AP Physics 1: Work & Energy",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "System Config",
        "Load W (N)",
        "Effort F (N)",
        "Rope segments (n)",
        "Theoretical MA",
        "Real MA",
        "Efficiency (%)"
      ],
      "rows": 3
    },
    "observations": [
      "Describe each pulley combination and its mechanical advantage:",
      "How did combining pulleys compare to single pulleys?"
    ],
    "conclusion": "State how the number of rope segments relates to MA. Comment on efficiency vs complexity:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Fixed and Mobile Pulleys</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 8 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>MA = n (number of rope segments) &nbsp;&nbsp;|&nbsp;&nbsp; efficiency = (W_out / W_in) × 100%</div>Combining fixed and movable pulleys (block and tackle) multiplies MA.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ More pulleys always increase MA but also increase friction losses.</li><li>❌ The 'free rope end' always counts as one of the supporting segments.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Ship rigging (block and tackle)</li><li>🌍 Car engine hoists (garage chains)</li><li>🌍 Zip-line tensioning systems</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: MA = number of rope segments supporting load. Each added pulley increases MA but reduces efficiency.<br><br>1 fixed = MA 1; 1 movable = MA 2; 2+1 system = MA 3–4. Efficiency drops ~5–10% per added pulley.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>The rigging of a tall ship uses dozens of combined pulleys to let a single sailor control a 500 kg sail. Compound pulleys multiply force dramatically.</em><br><br>Key concepts to emphasise: Combining fixed and movable pulleys (block and tackle) multiplies MA.; MA equals the number of rope segments supporting the load.",
        "hook": "Engaging hook for students: <blockquote>The rigging of a tall ship uses dozens of combined pulleys to let a single sailor control a 500 kg sail. Compound pulleys multiply force dramatically.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "MA = number of rope segments supporting load. Each added pulley increases MA but reduces efficiency.",
      "expected": "1 fixed = MA 1; 1 movable = MA 2; 2+1 system = MA 3–4. Efficiency drops ~5–10% per added pulley."
    }
  },
  {
    "num": 12,
    "title": "Inclined Plane",
    "section": "Mechanics",
    "desc": "Investigates how ramp angle affects the effort needed to raise a load.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Investigates how ramp angle affects the effort needed to raise a load.",
      "instructions": [
        "How did changing the angle affect the effort needed?",
        "Estimate the friction force. Was it significant?",
        "Compare theoretical F=W·sinθ with measured values. Explain any discrepancy:"
      ],
      "expectedOutcome": "F_theory = W·sinθ = W·(h/L). Friction adds F_friction = μ·W·cosθ. Measure friction by noting force difference. At θ=30°: F = 0.5W. Friction typically adds 5–20% to theoretical effort. Higher angle = more effort needed."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "📐",
          "name": "Inclined plane"
        },
        {
          "emoji": "⚖️",
          "name": "Dynamometer"
        },
        {
          "emoji": "🏋️",
          "name": "Masses"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🔩",
          "name": "Protractor"
        }
      ],
      "observationsToRecord": [
        "How did changing the angle affect the effort needed?",
        "Estimate the friction force. Was it significant?"
      ],
      "theoryPoints": [
        "An inclined plane reduces the force needed to raise an object at the cost of increased distance.",
        "MA = length of slope / height = 1/sinθ",
        "Without friction: F_effort = mg sinθ. Friction adds a force component mg cosθ × μ."
      ],
      "realWorldConnections": [
        "Wheelchair ramps",
        "Mountain switchback roads",
        "Screw threads (a wrapped inclined plane)",
        "Wedges (knife blades)"
      ],
      "formula": "F = mg·sinθ   |   MA = L/h = 1/sinθ"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 5 m ramp rises 1 m. What is its mechanical advantage?",
          "options": [
            "A. 1",
            "B. 5",
            "C. 0.2",
            "D. 25"
          ],
          "correctIndex": 1,
          "explanation": "MA = L/h = 5/1 = 5"
        },
        {
          "text": "To push a 100N box up a frictionless 30° ramp, what force is needed?",
          "options": [
            "A. 100N",
            "B. 86.6N",
            "C. 50N",
            "D. 57.7N"
          ],
          "correctIndex": 2,
          "explanation": "F = mg·sin30° = 100 × 0.5 = 50N"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 50
        },
        {
          "label": "Energy Transfer",
          "pct": 20
        },
        {
          "label": "Mathematics",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "A shallower ramp isn't 'easier' in terms of total work — it just spreads it over more distance.",
        "Friction always opposes motion and increases with the normal force (larger on shallower ramps)."
      ],
      "hook": "Ancient Egyptians moved multi-ton pyramid blocks using inclined planes. A 30° ramp can reduce the required force by half — but doubles the distance.",
      "khanLinks": [
        {
          "title": "Inclined Plane Force Components",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/inclined-planes-ap/v/inclined-plane-force-components"
        },
        {
          "title": "Normal Force & Contact Force",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/normal-force-ap/v/normal-force-and-contact-force"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Height h (cm)",
        "Length L (cm)",
        "sin θ",
        "Weight W (N)",
        "Effort F_theory (N)",
        "Effort F_measured (N)",
        "Friction force (N)"
      ],
      "rows": 4
    },
    "observations": [
      "How did changing the angle affect the effort needed?",
      "Estimate the friction force. Was it significant?"
    ],
    "conclusion": "Compare theoretical F=W·sinθ with measured values. Explain any discrepancy:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Inclined Plane</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>F = mg·sinθ &nbsp;&nbsp;|&nbsp;&nbsp; MA = L/h = 1/sinθ</div>An inclined plane reduces the force needed to raise an object at the cost of increased distance.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ A shallower ramp isn't 'easier' in terms of total work — it just spreads it over more distance.</li><li>❌ Friction always opposes motion and increases with the normal force (larger on shallower ramps).</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Wheelchair ramps</li><li>🌍 Mountain switchback roads</li><li>🌍 Screw threads (a wrapped inclined plane)</li><li>🌍 Wedges (knife blades)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: F_theory = W·sinθ = W·(h/L). Friction adds F_friction = μ·W·cosθ. Measure friction by noting force difference.<br><br>At θ=30°: F = 0.5W. Friction typically adds 5–20% to theoretical effort. Higher angle = more effort needed.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Ancient Egyptians moved multi-ton pyramid blocks using inclined planes. A 30° ramp can reduce the required force by half — but doubles the distance.</em><br><br>Key concepts to emphasise: An inclined plane reduces the force needed to raise an object at the cost of increased distance.; MA = length of slope / height = 1/sinθ",
        "hook": "Engaging hook for students: <blockquote>Ancient Egyptians moved multi-ton pyramid blocks using inclined planes. A 30° ramp can reduce the required force by half — but doubles the distance.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "F_theory = W·sinθ = W·(h/L). Friction adds F_friction = μ·W·cosθ. Measure friction by noting force difference.",
      "expected": "At θ=30°: F = 0.5W. Friction typically adds 5–20% to theoretical effort. Higher angle = more effort needed."
    }
  },
  {
    "num": 13,
    "title": "Hooke’s Law",
    "section": "Mechanics",
    "desc": "Investigates the linear relationship between force and spring extension (F = kx).",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Investigates the linear relationship between force and spring extension (F = kx).",
      "instructions": [
        "Did the spring return to original length after removing each load?",
        "At what force did you observe deviation from Hooke's Law (elastic limit)?",
        "State the spring constant k with units. Was Hooke's Law confirmed? What is the elastic limit?"
      ],
      "expectedOutcome": "k should be approximately constant across measurements. Plot F vs x — straight line confirms Hooke's Law. Slope = k. Typical lab spring: k = 20–50 N/m. Elastic limit visible when graph deviates from linear."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Metal spring"
        },
        {
          "emoji": "🏋️",
          "name": "Hooked masses"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🔩",
          "name": "Support rod"
        },
        {
          "emoji": "📋",
          "name": "Graph paper"
        }
      ],
      "observationsToRecord": [
        "Did the spring return to original length after removing each load?",
        "At what force did you observe deviation from Hooke's Law (elastic limit)?"
      ],
      "theoryPoints": [
        "Hooke's Law: extension is proportional to force within the elastic limit (F = kx).",
        "The spring constant k (N/m) measures stiffness — larger k = stiffer spring.",
        "Beyond the elastic limit, permanent deformation occurs (plastic deformation)."
      ],
      "realWorldConnections": [
        "Car suspensions",
        "Bungee cords",
        "Weighing scales",
        "Building seismic dampers"
      ],
      "formula": "F = k·x   |   k = F/x   |   PE = ½kx²"
    },
    "questions": {
      "mcq": [
        {
          "text": "A spring stretches 4 cm under a 2N force. What is k?",
          "options": [
            "A. 8 N/m",
            "B. 50 N/m",
            "C. 0.08 N/m",
            "D. 2 N/m"
          ],
          "correctIndex": 1,
          "explanation": "k = F/x = 2N / 0.04m = 50 N/m"
        },
        {
          "text": "What happens when a spring is stretched beyond its elastic limit?",
          "options": [
            "A. It returns to original length",
            "B. It permanently deforms",
            "C. k increases",
            "D. It breaks immediately"
          ],
          "correctIndex": 1,
          "explanation": "Beyond the elastic limit, Hooke's Law no longer applies and permanent (plastic) deformation occurs."
        }
      ],
      "discussion": [
        "Why do springs have different k values?",
        "What determines a spring's elastic limit?",
        "How do car shock absorbers use Hooke's Law?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 40
        },
        {
          "label": "Energy Transfer",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Hooke's Law is not universal — it only applies below the elastic limit.",
        "A stiffer spring (higher k) stores MORE energy for the same extension."
      ],
      "hook": "Every spring, mattress, car suspension, and building earthquake absorber relies on Hooke's Law — one of the most elegant laws in physics.",
      "khanLinks": [
        {
          "title": "Intro to Springs and Hooke's Law",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap/v/intro-to-springs-and-hookers-law"
        },
        {
          "title": "Spring Potential Energy",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-work-and-energy/spring-potential-energy-ap/v/elastic-potential-energy-stored-in-a-spring"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Force F (N)",
        "Extension x (cm)",
        "Spring constant k = F/x (N/m)",
        "Notes"
      ],
      "rows": 7
    },
    "observations": [
      "Did the spring return to original length after removing each load?",
      "At what force did you observe deviation from Hooke's Law (elastic limit)?"
    ],
    "conclusion": "State the spring constant k with units. Was Hooke's Law confirmed? What is the elastic limit?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Hooke’s Law</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Pre-test springs to identify elastic limit</li><li>Prepare mass hangers and cylindrical masses</li><li>Set up rulers vertically and securely</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Stretching spring beyond elastic limit permanently</li><li>Not zeroing extension at no-load position</li><li>Including mass hanger weight in calculation without accounting for it</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>F = k·x &nbsp;&nbsp;|&nbsp;&nbsp; k = F/x &nbsp;&nbsp;|&nbsp;&nbsp; PE = ½kx²</div>Hooke's Law: extension is proportional to force within the elastic limit (F = kx).",
        "question": "Discussion questions for students:<ul><li>Why do springs have different k values?</li><li>What determines a spring's elastic limit?</li><li>How do car shock absorbers use Hooke's Law?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Hooke's Law is not universal — it only applies below the elastic limit.</li><li>❌ A stiffer spring (higher k) stores MORE energy for the same extension.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Car suspensions</li><li>🌍 Bungee cords</li><li>🌍 Weighing scales</li><li>🌍 Building seismic dampers</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: k should be approximately constant across measurements. Plot F vs x — straight line confirms Hooke's Law. Slope = k.<br><br>Typical lab spring: k = 20–50 N/m. Elastic limit visible when graph deviates from linear.",
        "extend": "Extension activity: Plot F vs x graph and determine k from gradient.",
        "explain": "Here's how to explain this to students: <em>Every spring, mattress, car suspension, and building earthquake absorber relies on Hooke's Law — one of the most elegant laws in physics.</em><br><br>Key concepts to emphasise: Hooke's Law: extension is proportional to force within the elastic limit (F = kx).; The spring constant k (N/m) measures stiffness — larger k = stiffer spring.",
        "hook": "Engaging hook for students: <blockquote>Every spring, mattress, car suspension, and building earthquake absorber relies on Hooke's Law — one of the most elegant laws in physics.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "k should be approximately constant across measurements. Plot F vs x — straight line confirms Hooke's Law. Slope = k.",
      "expected": "Typical lab spring: k = 20–50 N/m. Elastic limit visible when graph deviates from linear."
    }
  },
  {
    "num": 14,
    "title": "Springs in series and in parallel",
    "section": "Mechanics",
    "desc": "Compares effective spring constants for series and parallel spring combinations.",
    "setupTime": "8 min",
    "duration": "25 min",
    "summary": {
      "whatTheyLearn": "Compares effective spring constants for series and parallel spring combinations.",
      "instructions": [
        "Which configuration (series/parallel) gave the largest extension for the same force?",
        "Compare k_eff values with theoretical predictions:",
        "State formulas for series and parallel combinations. Were your results consistent with theory?"
      ],
      "expectedOutcome": "Series: k_eff < each spring. Parallel: k_eff > each spring. If k₁=k₂=k: series k/2, parallel 2k. Two identical springs k=30 N/m: series→15 N/m, parallel→60 N/m. Verify with measurements."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Springs x2"
        },
        {
          "emoji": "🏋️",
          "name": "Masses"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🔩",
          "name": "Support rod"
        },
        {
          "emoji": "🪝",
          "name": "Hooks"
        }
      ],
      "observationsToRecord": [
        "Which configuration (series/parallel) gave the largest extension for the same force?",
        "Compare k_eff values with theoretical predictions:"
      ],
      "theoryPoints": [
        "Springs in series: 1/k_eff = 1/k₁ + 1/k₂ — effective spring constant is lower (softer).",
        "Springs in parallel: k_eff = k₁ + k₂ — effective spring constant is higher (stiffer).",
        "Same principle applies to electrical resistors and capacitors (opposite rules for each)."
      ],
      "realWorldConnections": [
        "Mattress springs (parallel = firm)",
        "Bungee cord extensions (series = more stretch)",
        "Car suspension design"
      ],
      "formula": "Series: 1/k_eff = Σ(1/kᵢ)   |   Parallel: k_eff = Σkᵢ"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two identical springs (k = 10 N/m each) in parallel. What is k_eff?",
          "options": [
            "A. 5 N/m",
            "B. 10 N/m",
            "C. 20 N/m",
            "D. 100 N/m"
          ],
          "correctIndex": 2,
          "explanation": "Parallel: k_eff = k₁ + k₂ = 10 + 10 = 20 N/m"
        },
        {
          "text": "Two identical springs (k = 10 N/m each) in series. What is k_eff?",
          "options": [
            "A. 5 N/m",
            "B. 10 N/m",
            "C. 20 N/m",
            "D. 1 N/m"
          ],
          "correctIndex": 0,
          "explanation": "Series: 1/k_eff = 1/10 + 1/10 = 2/10, so k_eff = 5 N/m"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 40
        },
        {
          "label": "Mathematics",
          "pct": 30
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Two springs in series are NOT equivalent to one spring with double the constant — they're softer.",
        "Springs in parallel share the load, not the extension."
      ],
      "hook": "Series vs parallel springs explain everything from multi-spring mattresses to suspension bridges. Nature always finds the simplest mechanical solution.",
      "khanLinks": [
        {
          "title": "Spring Forces (AP Physics 1)",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap"
        },
        {
          "title": "Intro to Springs and Hooke's Law",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-forces-newtons-laws/spring-forces-ap/v/intro-to-springs-and-hookers-law"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Configuration",
        "Force F (N)",
        "Extension x (cm)",
        "k_eff measured (N/m)",
        "k_eff theory (N/m)",
        "% Difference"
      ],
      "rows": 3
    },
    "observations": [
      "Which configuration (series/parallel) gave the largest extension for the same force?",
      "Compare k_eff values with theoretical predictions:"
    ],
    "conclusion": "State formulas for series and parallel combinations. Were your results consistent with theory?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Springs in series and in parallel</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 8 min setup + 25 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Series: 1/k_eff = Σ(1/kᵢ) &nbsp;&nbsp;|&nbsp;&nbsp; Parallel: k_eff = Σkᵢ</div>Springs in series: 1/k_eff = 1/k₁ + 1/k₂ — effective spring constant is lower (softer).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Two springs in series are NOT equivalent to one spring with double the constant — they're softer.</li><li>❌ Springs in parallel share the load, not the extension.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Mattress springs (parallel = firm)</li><li>🌍 Bungee cord extensions (series = more stretch)</li><li>🌍 Car suspension design</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Series: k_eff < each spring. Parallel: k_eff > each spring. If k₁=k₂=k: series k/2, parallel 2k.<br><br>Two identical springs k=30 N/m: series→15 N/m, parallel→60 N/m. Verify with measurements.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Series vs parallel springs explain everything from multi-spring mattresses to suspension bridges. Nature always finds the simplest mechanical solution.</em><br><br>Key concepts to emphasise: Springs in series: 1/k_eff = 1/k₁ + 1/k₂ — effective spring constant is lower (softer).; Springs in parallel: k_eff = k₁ + k₂ — effective spring constant is higher (stiffer).",
        "hook": "Engaging hook for students: <blockquote>Series vs parallel springs explain everything from multi-spring mattresses to suspension bridges. Nature always finds the simplest mechanical solution.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Series: k_eff < each spring. Parallel: k_eff > each spring. If k₁=k₂=k: series k/2, parallel 2k.",
      "expected": "Two identical springs k=30 N/m: series→15 N/m, parallel→60 N/m. Verify with measurements."
    }
  },
  {
    "num": 15,
    "title": "Simple Pendulum",
    "section": "Mechanics",
    "desc": "Measures period vs. length to calculate g using T = 2π√(L/g).",
    "setupTime": "5 min",
    "duration": "25 min",
    "summary": {
      "whatTheyLearn": "Measures period vs. length to calculate g using T = 2π√(L/g).",
      "instructions": [
        "Plot T² vs L. Describe the shape of the graph:",
        "Did mass of the bob affect the period? Explain:",
        "Calculate your measured value of g. Compare to accepted value (9.81 m/s²). Find percentage error:"
      ],
      "expectedOutcome": "T = 2π√(L/g). T² = (4π²/g)·L — linear graph through origin. Slope = 4π²/g. Typical g measurement: 9.5–10.1 m/s². L=25cm→T≈1.00s; L=50cm→T≈1.42s; L=100cm→T≈2.01s. Plot T² vs L, slope=4π²/g≈4.03."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧵",
          "name": "String pendulum"
        },
        {
          "emoji": "⚙️",
          "name": "Heavy bob"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "🔩",
          "name": "Clamp stand"
        }
      ],
      "observationsToRecord": [
        "Plot T² vs L. Describe the shape of the graph:",
        "Did mass of the bob affect the period? Explain:"
      ],
      "theoryPoints": [
        "Period of a simple pendulum: T = 2π√(L/g) — depends only on length and gravity.",
        "Period is independent of mass and amplitude (for small angles < 15°).",
        "Can be used to measure g very precisely, or to keep accurate time."
      ],
      "realWorldConnections": [
        "Grandfather clock mechanism",
        "Seismometer for earthquakes",
        "Foucault pendulum demonstrating Earth's rotation"
      ],
      "formula": "T = 2π√(L/g)   |   g = 4π²L/T²"
    },
    "questions": {
      "mcq": [
        {
          "text": "A pendulum's period is 2s. If you quadruple its length, what is the new period?",
          "options": [
            "A. 1 s",
            "B. 2 s",
            "C. 4 s",
            "D. 8 s"
          ],
          "correctIndex": 2,
          "explanation": "T ∝ √L. Quadrupling L doubles T: new T = 2×2 = 4s"
        },
        {
          "text": "What two variables affect a simple pendulum's period?",
          "options": [
            "A. Mass and length",
            "B. Amplitude and mass",
            "C. Length and g",
            "D. Temperature and length"
          ],
          "correctIndex": 2,
          "explanation": "T = 2π√(L/g) — only length L and gravitational acceleration g matter."
        }
      ],
      "discussion": [
        "How did Galileo use pendulums to measure time?",
        "Why don't pendulum clocks work on the Moon?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 35
        },
        {
          "label": "Mathematics",
          "pct": 35
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Heavier bobs do NOT swing faster — period is independent of mass.",
        "Larger swings (large amplitude) slightly increase the period — the formula is an approximation."
      ],
      "hook": "Galileo supposedly dropped two spheres from the Leaning Tower of Pisa. His pendulum discovery came from watching a swinging cathedral lamp — time and gravity locked together.",
      "khanLinks": [
        {
          "title": "Period of a Pendulum",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion/simple-pendulum-ap/v/period-of-a-pendulum"
        },
        {
          "title": "Simple Harmonic Motion",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Length L (cm)",
        "10 oscillations time (s)",
        "Period T (s)",
        "T² (s²)",
        "g calculated (m/s²)"
      ],
      "rows": 6
    },
    "observations": [
      "Plot T² vs L. Describe the shape of the graph:",
      "Did mass of the bob affect the period? Explain:"
    ],
    "conclusion": "Calculate your measured value of g. Compare to accepted value (9.81 m/s²). Find percentage error:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Simple Pendulum</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Prepare strings of lengths: 25, 50, 75, 100, 125 cm</li><li>Use heavy metal bobs (reduce air resistance)</li><li>Demonstrate 'small angle' (< 15°) to class</li></ol>Time needed: 5 min setup + 25 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Using too large amplitude (>15°) invalidating simple pendulum formula</li><li>Counting half-swings instead of full oscillations</li><li>Starting timer mid-swing</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>T = 2π√(L/g) &nbsp;&nbsp;|&nbsp;&nbsp; g = 4π²L/T²</div>Period of a simple pendulum: T = 2π√(L/g) — depends only on length and gravity.",
        "question": "Discussion questions for students:<ul><li>How did Galileo use pendulums to measure time?</li><li>Why don't pendulum clocks work on the Moon?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Heavier bobs do NOT swing faster — period is independent of mass.</li><li>❌ Larger swings (large amplitude) slightly increase the period — the formula is an approximation.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Grandfather clock mechanism</li><li>🌍 Seismometer for earthquakes</li><li>🌍 Foucault pendulum demonstrating Earth's rotation</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: T = 2π√(L/g). T² = (4π²/g)·L — linear graph through origin. Slope = 4π²/g. Typical g measurement: 9.5–10.1 m/s².<br><br>L=25cm→T≈1.00s; L=50cm→T≈1.42s; L=100cm→T≈2.01s. Plot T² vs L, slope=4π²/g≈4.03.",
        "extend": "Extension activity: Use results to calculate g and compare to 9.81 m/s².",
        "explain": "Here's how to explain this to students: <em>Galileo supposedly dropped two spheres from the Leaning Tower of Pisa. His pendulum discovery came from watching a swinging cathedral lamp — time and gravity locked together.</em><br><br>Key concepts to emphasise: Period of a simple pendulum: T = 2π√(L/g) — depends only on length and gravity.; Period is independent of mass and amplitude (for small angles < 15°).",
        "hook": "Engaging hook for students: <blockquote>Galileo supposedly dropped two spheres from the Leaning Tower of Pisa. His pendulum discovery came from watching a swinging cathedral lamp — time and gravity locked together.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "T = 2π√(L/g). T² = (4π²/g)·L — linear graph through origin. Slope = 4π²/g. Typical g measurement: 9.5–10.1 m/s².",
      "expected": "L=25cm→T≈1.00s; L=50cm→T≈1.42s; L=100cm→T≈2.01s. Plot T² vs L, slope=4π²/g≈4.03."
    }
  },
  {
    "num": 16,
    "title": "Spring Pendulum",
    "section": "Mechanics",
    "desc": "Explores how mass affects oscillation period in a spring-mass system.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Explores how mass affects oscillation period in a spring-mass system.",
      "instructions": [
        "How did increasing mass affect the period?",
        "Compare spring pendulum period to gravity pendulum of same length:",
        "State T = 2π√(m/k). Calculate k from your results and compare to Hooke's Law measurement:"
      ],
      "expectedOutcome": "T increases with √m. Compare k obtained from T with k from Hooke's Law experiment. They should agree within 10%. m=0.1kg, k=10N/m → T≈0.63s. Doubling mass → T×√2≈0.89s."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌀",
          "name": "Spring"
        },
        {
          "emoji": "🏋️",
          "name": "Mass hanger + masses"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🔩",
          "name": "Clamp stand"
        }
      ],
      "observationsToRecord": [
        "How did increasing mass affect the period?",
        "Compare spring pendulum period to gravity pendulum of same length:"
      ],
      "theoryPoints": [
        "A spring pendulum oscillates with period T = 2π√(m/k).",
        "Unlike a gravitational pendulum, period increases with mass and decreases with stiffer springs.",
        "Energy alternates between kinetic (moving) and elastic potential (compressed/stretched spring)."
      ],
      "realWorldConnections": [
        "Watch balance wheel and hairspring",
        "Car suspension oscillation after a bump",
        "Atomic clocks (quantum springs)"
      ],
      "formula": "T = 2π√(m/k)   |   f = 1/(2π) × √(k/m)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A spring pendulum has mass 0.1 kg and k = 10 N/m. What is its period?",
          "options": [
            "A. 0.63 s",
            "B. 6.28 s",
            "C. 0.2 s",
            "D. 1 s"
          ],
          "correctIndex": 0,
          "explanation": "T = 2π√(0.1/10) = 2π×0.1 ≈ 0.63 s"
        },
        {
          "text": "Doubling the mass of a spring pendulum changes its period by a factor of:",
          "options": [
            "A. 2",
            "B. √2",
            "C. 0.5",
            "D. 4"
          ],
          "correctIndex": 1,
          "explanation": "T ∝ √m, so doubling m multiplies T by √2 ≈ 1.41"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 40
        },
        {
          "label": "Mathematics",
          "pct": 30
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Unlike a gravity pendulum, the spring pendulum period DOES depend on mass.",
        "Spring and gravity pendulums have different restoring force sources — spring vs gravity component."
      ],
      "hook": "A spring pendulum is at the heart of every mechanical watch — the hairspring and balance wheel keep perfect time through energy oscillating between kinetic and potential forms.",
      "khanLinks": [
        {
          "title": "Spring-Mass Systems",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion/spring-mass-systems-ap"
        },
        {
          "title": "Simple Harmonic Motion",
          "url": "https://www.khanacademy.org/science/ap-physics-1/simple-harmonic-motion"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Mass m (kg)",
        "10 oscillations time (s)",
        "Period T (s)",
        "T² (s²)",
        "k from T (N/m)"
      ],
      "rows": 5
    },
    "observations": [
      "How did increasing mass affect the period?",
      "Compare spring pendulum period to gravity pendulum of same length:"
    ],
    "conclusion": "State T = 2π√(m/k). Calculate k from your results and compare to Hooke's Law measurement:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Spring Pendulum</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>T = 2π√(m/k) &nbsp;&nbsp;|&nbsp;&nbsp; f = 1/(2π) × √(k/m)</div>A spring pendulum oscillates with period T = 2π√(m/k).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Unlike a gravity pendulum, the spring pendulum period DOES depend on mass.</li><li>❌ Spring and gravity pendulums have different restoring force sources — spring vs gravity component.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Watch balance wheel and hairspring</li><li>🌍 Car suspension oscillation after a bump</li><li>🌍 Atomic clocks (quantum springs)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: T increases with √m. Compare k obtained from T with k from Hooke's Law experiment. They should agree within 10%.<br><br>m=0.1kg, k=10N/m → T≈0.63s. Doubling mass → T×√2≈0.89s.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A spring pendulum is at the heart of every mechanical watch — the hairspring and balance wheel keep perfect time through energy oscillating between kinetic and potential forms.</em><br><br>Key concepts to emphasise: A spring pendulum oscillates with period T = 2π√(m/k).; Unlike a gravitational pendulum, period increases with mass and decreases with stiffer springs.",
        "hook": "Engaging hook for students: <blockquote>A spring pendulum is at the heart of every mechanical watch — the hairspring and balance wheel keep perfect time through energy oscillating between kinetic and potential forms.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "T increases with √m. Compare k obtained from T with k from Hooke's Law experiment. They should agree within 10%.",
      "expected": "m=0.1kg, k=10N/m → T≈0.63s. Doubling mass → T×√2≈0.89s."
    }
  },
  {
    "num": 17,
    "title": "Communicating Vessels",
    "section": "Mechanics",
    "desc": "Demonstrates that connected fluid surfaces reach the same height regardless of container shape.",
    "setupTime": "5 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Demonstrates that connected fluid surfaces reach the same height regardless of container shape.",
      "instructions": [
        "Did vessel shape or volume affect the final water level? Explain:",
        "What happened when you used a denser fluid (e.g. salt water vs fresh water)?",
        "State Pascal's principle as demonstrated by this experiment:"
      ],
      "expectedOutcome": "At equilibrium, both surfaces reach the same height regardless of container shape. Δh ≈ 0 for same fluid. Δh should be 0 ± 2mm for connected vessels with same fluid. Different fluids: h₁ρ₁ = h₂ρ₂."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "💧",
          "name": "Water"
        },
        {
          "emoji": "🧪",
          "name": "Communicating vessel set"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🟦",
          "name": "Coloured liquid"
        }
      ],
      "observationsToRecord": [
        "Did vessel shape or volume affect the final water level? Explain:",
        "What happened when you used a denser fluid (e.g. salt water vs fresh water)?"
      ],
      "theoryPoints": [
        "Communicating vessels: connected fluid containers reach the same surface level regardless of shape.",
        "Pressure at equal depths is equal: P = ρgh",
        "Pascal's Principle: pressure applied to an enclosed fluid is transmitted undiminished throughout."
      ],
      "realWorldConnections": [
        "Hydraulic car brakes",
        "U-tube manometer",
        "Spirit levels",
        "Canal locks"
      ],
      "formula": "P = ρgh   |   P₁ = P₂ at equal depth"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two connected vessels have different cross-sections. At equilibrium, the water levels are:",
          "options": [
            "A. Different (wider vessel is lower)",
            "B. The same",
            "C. Different (narrower is higher)",
            "D. Depends on volume"
          ],
          "correctIndex": 1,
          "explanation": "In communicating vessels, the free surface always reaches the same height regardless of shape."
        },
        {
          "text": "Water pressure at 2 m depth (ρ=1000 kg/m³, g=10 m/s²):",
          "options": [
            "A. 200 Pa",
            "B. 20 000 Pa",
            "C. 2000 Pa",
            "D. 100 Pa"
          ],
          "correctIndex": 1,
          "explanation": "P = ρgh = 1000×10×2 = 20 000 Pa"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 40
        },
        {
          "label": "Fluid Mechanics",
          "pct": 35
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Fluid level in connected vessels depends only on height, not the volume or shape of the containers.",
        "Dense fluids (like mercury) reach lower levels than water for the same pressure."
      ],
      "hook": "Pascal proved that water pressure transmits equally in all directions — this is why your hydraulic car brakes work. One foot applies tons of stopping force.",
      "khanLinks": [
        {
          "title": "Introduction to Pressure",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics/v/introduction-to-pressure"
        },
        {
          "title": "Fluid Statics",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Vessel shape/size",
        "Water height left (cm)",
        "Water height right (cm)",
        "Difference Δh (cm)",
        "Fluid type"
      ],
      "rows": 4
    },
    "observations": [
      "Did vessel shape or volume affect the final water level? Explain:",
      "What happened when you used a denser fluid (e.g. salt water vs fresh water)?"
    ],
    "conclusion": "State Pascal's principle as demonstrated by this experiment:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Communicating Vessels</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>P = ρgh &nbsp;&nbsp;|&nbsp;&nbsp; P₁ = P₂ at equal depth</div>Communicating vessels: connected fluid containers reach the same surface level regardless of shape.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Fluid level in connected vessels depends only on height, not the volume or shape of the containers.</li><li>❌ Dense fluids (like mercury) reach lower levels than water for the same pressure.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Hydraulic car brakes</li><li>🌍 U-tube manometer</li><li>🌍 Spirit levels</li><li>🌍 Canal locks</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: At equilibrium, both surfaces reach the same height regardless of container shape. Δh ≈ 0 for same fluid.<br><br>Δh should be 0 ± 2mm for connected vessels with same fluid. Different fluids: h₁ρ₁ = h₂ρ₂.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Pascal proved that water pressure transmits equally in all directions — this is why your hydraulic car brakes work. One foot applies tons of stopping force.</em><br><br>Key concepts to emphasise: Communicating vessels: connected fluid containers reach the same surface level regardless of shape.; Pressure at equal depths is equal: P = ρgh",
        "hook": "Engaging hook for students: <blockquote>Pascal proved that water pressure transmits equally in all directions — this is why your hydraulic car brakes work. One foot applies tons of stopping force.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "At equilibrium, both surfaces reach the same height regardless of container shape. Δh ≈ 0 for same fluid.",
      "expected": "Δh should be 0 ± 2mm for connected vessels with same fluid. Different fluids: h₁ρ₁ = h₂ρ₂."
    }
  },
  {
    "num": 18,
    "title": "Archimedes’ Principle",
    "section": "Mechanics",
    "desc": "Verifies that buoyancy equals the weight of displaced fluid (Eureka principle).",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Verifies that buoyancy equals the weight of displaced fluid (Eureka principle).",
      "instructions": [
        "Did the measured buoyancy equal the weight of displaced water? Show calculation:",
        "What happened to a floating object? How did you measure its buoyancy?",
        "State Archimedes' Principle using your results. Calculate the density of each object:"
      ],
      "expectedOutcome": "F_B = W_air − W_water = weight of fluid displaced = ρ_fluid × V × g. V = F_B / (ρ_water × g) = F_B / 9800 × 10⁶ cm³. Iron block 50g: W=0.49N, W_w≈0.43N, F_B≈0.06N, V≈6.1cm³, ρ≈8.2 g/cm³."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🏋️",
          "name": "Sample masses"
        },
        {
          "emoji": "⚖️",
          "name": "Spring balance"
        },
        {
          "emoji": "💧",
          "name": "Water container"
        },
        {
          "emoji": "📏",
          "name": "Overflow can"
        }
      ],
      "observationsToRecord": [
        "Did the measured buoyancy equal the weight of displaced water? Show calculation:",
        "What happened to a floating object? How did you measure its buoyancy?"
      ],
      "theoryPoints": [
        "Buoyancy force = weight of fluid displaced = ρ_fluid × V_displaced × g.",
        "An object floats if buoyancy ≥ weight; sinks if buoyancy < weight.",
        "The apparent weight of a submerged object = real weight − buoyancy force."
      ],
      "realWorldConnections": [
        "Steel ships (hollow hull displaces huge volume)",
        "Submarines (control buoyancy with ballast tanks)",
        "Hot air balloons"
      ],
      "formula": "F_B = ρ_f × V × g   |   W_apparent = W − F_B"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 200 cm³ object is submerged in water (ρ=1 g/cm³). What is the buoyancy force?",
          "options": [
            "A. 0.2 N",
            "B. 1.96 N",
            "C. 200 N",
            "D. 20 N"
          ],
          "correctIndex": 1,
          "explanation": "F_B = ρVg = 1×200×10⁻⁶×9.8 ≈ 1.96 N (or 200 g-force if using g/cm³)"
        },
        {
          "text": "An object has density 0.8 g/cm³. It is placed in water. It will:",
          "options": [
            "A. Sink",
            "B. Float with part above water",
            "C. Float fully submerged",
            "D. Dissolve"
          ],
          "correctIndex": 1,
          "explanation": "Density < 1 g/cm³ (water), so it floats with part above the surface."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Forces & Motion",
          "pct": 40
        },
        {
          "label": "Fluid Mechanics",
          "pct": 35
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Steel ships float because their average density (including hollow space) is less than water.",
        "Buoyancy depends on displaced volume, not the shape or material of the object."
      ],
      "hook": "'Eureka!' — Archimedes' legendary cry when he stepped into his bath and saw water overflow. He'd just discovered the principle that explains why steel ships float.",
      "khanLinks": [
        {
          "title": "Archimedes Principle & Buoyant Force",
          "url": "https://www.khanacademy.org/science/physics/fluids/buoyancy-and-archimedes-principle/v/archimedes-principle-and-buoyant-force"
        },
        {
          "title": "Buoyancy & Archimedes' Principle",
          "url": "https://www.khanacademy.org/science/physics/fluids/buoyancy-and-archimedes-principle"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Object",
        "Weight in air W (N)",
        "Weight in water W_w (N)",
        "Buoyancy F_B (N)",
        "Volume displaced V (cm³)",
        "ρ_object (g/cm³)"
      ],
      "rows": 4
    },
    "observations": [
      "Did the measured buoyancy equal the weight of displaced water? Show calculation:",
      "What happened to a floating object? How did you measure its buoyancy?"
    ],
    "conclusion": "State Archimedes' Principle using your results. Calculate the density of each object:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Archimedes’ Principle</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>F_B = ρ_f × V × g &nbsp;&nbsp;|&nbsp;&nbsp; W_apparent = W − F_B</div>Buoyancy force = weight of fluid displaced = ρ_fluid × V_displaced × g.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Steel ships float because their average density (including hollow space) is less than water.</li><li>❌ Buoyancy depends on displaced volume, not the shape or material of the object.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Steel ships (hollow hull displaces huge volume)</li><li>🌍 Submarines (control buoyancy with ballast tanks)</li><li>🌍 Hot air balloons</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: F_B = W_air − W_water = weight of fluid displaced = ρ_fluid × V × g. V = F_B / (ρ_water × g) = F_B / 9800 × 10⁶ cm³.<br><br>Iron block 50g: W=0.49N, W_w≈0.43N, F_B≈0.06N, V≈6.1cm³, ρ≈8.2 g/cm³.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>'Eureka!' — Archimedes' legendary cry when he stepped into his bath and saw water overflow. He'd just discovered the principle that explains why steel ships float.</em><br><br>Key concepts to emphasise: Buoyancy force = weight of fluid displaced = ρ_fluid × V_displaced × g.; An object floats if buoyancy ≥ weight; sinks if buoyancy < weight.",
        "hook": "Engaging hook for students: <blockquote>'Eureka!' — Archimedes' legendary cry when he stepped into his bath and saw water overflow. He'd just discovered the principle that explains why steel ships float.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "F_B = W_air − W_water = weight of fluid displaced = ρ_fluid × V × g. V = F_B / (ρ_water × g) = F_B / 9800 × 10⁶ cm³.",
      "expected": "Iron block 50g: W=0.49N, W_w≈0.43N, F_B≈0.06N, V≈6.1cm³, ρ≈8.2 g/cm³."
    }
  },
  {
    "num": 25,
    "title": "The Manometer",
    "section": "Mechanics",
    "desc": "Measures gauge pressure using fluid column height in a U-tube manometer.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Measures gauge pressure using fluid column height in a U-tube manometer.",
      "instructions": [
        "Describe what happened to the fluid levels when pressure was applied:",
        "What is the difference between gauge pressure and absolute pressure?",
        "Calculate the gauge pressures from your height measurements. State the formula used:"
      ],
      "expectedOutcome": "P_gauge = ρgh. For water (ρ=1000 kg/m³): P = 1000×9.81×h. P_abs = P_atm + P_gauge. 1 atm ≈ 101325 Pa. h=10cm water → P_gauge = 981 Pa; h=50cm → 4905 Pa. Vacuum would show negative gauge pressure."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧪",
          "name": "U-tube manometer"
        },
        {
          "emoji": "💧",
          "name": "Water"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🌬️",
          "name": "Rubber tubing"
        },
        {
          "emoji": "🔒",
          "name": "Clips"
        }
      ],
      "observationsToRecord": [
        "Describe what happened to the fluid levels when pressure was applied:",
        "What is the difference between gauge pressure and absolute pressure?"
      ],
      "theoryPoints": [
        "A manometer measures pressure difference between a gas and a reference (usually atmosphere).",
        "Gauge pressure = absolute pressure − atmospheric pressure.",
        "U-tube manometer: the height difference h gives P = ρgh."
      ],
      "realWorldConnections": [
        "Blood pressure measurement",
        "Tyre pressure gauges",
        "Gas pipe pressure monitoring",
        "Weather barometers"
      ],
      "formula": "P_gauge = ρgh   |   P_abs = P_atm + P_gauge"
    },
    "questions": {
      "mcq": [
        {
          "text": "A water manometer shows 50 cm height difference. What is the gauge pressure? (ρ=1000 kg/m³, g=10)",
          "options": [
            "A. 50 Pa",
            "B. 500 Pa",
            "C. 5000 Pa",
            "D. 50 000 Pa"
          ],
          "correctIndex": 2,
          "explanation": "P = ρgh = 1000×10×0.5 = 5000 Pa"
        },
        {
          "text": "Gauge pressure is 0 Pa. What does this mean?",
          "options": [
            "A. There is a vacuum",
            "B. Pressure equals atmospheric",
            "C. There is no gas",
            "D. Pressure is 101 325 Pa absolute"
          ],
          "correctIndex": 1,
          "explanation": "Gauge pressure = 0 means the absolute pressure equals atmospheric pressure — open to atmosphere."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Fluid Mechanics",
          "pct": 45
        },
        {
          "label": "Measurement",
          "pct": 30
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Gauge pressure can be negative (vacuum) — absolute pressure can never be negative.",
        "The fluid in a manometer doesn't need to be mercury — any fluid works, but height differs with density."
      ],
      "hook": "Every weather forecast depends on atmospheric pressure. Torricelli invented the barometer in 1643 and proved air has weight — shocking scientists of his day.",
      "khanLinks": [
        {
          "title": "Introduction to Pressure",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics/v/introduction-to-pressure"
        },
        {
          "title": "Fluid Statics",
          "url": "https://www.khanacademy.org/science/physics/fluids/fluid-statics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Gas source",
        "Height diff h (cm)",
        "Fluid density ρ (g/cm³)",
        "Gauge pressure P (Pa)",
        "Absolute pressure P_abs (Pa)"
      ],
      "rows": 4
    },
    "observations": [
      "Describe what happened to the fluid levels when pressure was applied:",
      "What is the difference between gauge pressure and absolute pressure?"
    ],
    "conclusion": "Calculate the gauge pressures from your height measurements. State the formula used:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>The Manometer</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>P_gauge = ρgh &nbsp;&nbsp;|&nbsp;&nbsp; P_abs = P_atm + P_gauge</div>A manometer measures pressure difference between a gas and a reference (usually atmosphere).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Gauge pressure can be negative (vacuum) — absolute pressure can never be negative.</li><li>❌ The fluid in a manometer doesn't need to be mercury — any fluid works, but height differs with density.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Blood pressure measurement</li><li>🌍 Tyre pressure gauges</li><li>🌍 Gas pipe pressure monitoring</li><li>🌍 Weather barometers</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: P_gauge = ρgh. For water (ρ=1000 kg/m³): P = 1000×9.81×h. P_abs = P_atm + P_gauge. 1 atm ≈ 101325 Pa.<br><br>h=10cm water → P_gauge = 981 Pa; h=50cm → 4905 Pa. Vacuum would show negative gauge pressure.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Every weather forecast depends on atmospheric pressure. Torricelli invented the barometer in 1643 and proved air has weight — shocking scientists of his day.</em><br><br>Key concepts to emphasise: A manometer measures pressure difference between a gas and a reference (usually atmosphere).; Gauge pressure = absolute pressure − atmospheric pressure.",
        "hook": "Engaging hook for students: <blockquote>Every weather forecast depends on atmospheric pressure. Torricelli invented the barometer in 1643 and proved air has weight — shocking scientists of his day.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "P_gauge = ρgh. For water (ρ=1000 kg/m³): P = 1000×9.81×h. P_abs = P_atm + P_gauge. 1 atm ≈ 101325 Pa.",
      "expected": "h=10cm water → P_gauge = 981 Pa; h=50cm → 4905 Pa. Vacuum would show negative gauge pressure."
    }
  },
  {
    "num": 19,
    "title": "Equilibrium temperature of mixed liquids",
    "section": "Heat",
    "desc": "Mixes hot and cold water to verify the law of heat exchange.",
    "setupTime": "10 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Mixes hot and cold water to verify the law of heat exchange.",
      "instructions": [
        "Was the measured T_eq close to calculated? List sources of heat loss:",
        "What happened when you mixed different masses of water?",
        "State the law of heat exchange. Calculate % error for each trial:"
      ],
      "expectedOutcome": "T_eq = (m₁T₁ + m₂T₂)/(m₁+m₂) when c is same. Error from heat loss to calorimeter/surroundings. Expect 2–5% error. 100g at 80°C + 100g at 20°C → T_eq = 50°C. Real T_eq slightly < 50°C due to heat loss."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Thermometers x2"
        },
        {
          "emoji": "☕",
          "name": "Hot water"
        },
        {
          "emoji": "💧",
          "name": "Cold water"
        },
        {
          "emoji": "⚗️",
          "name": "Calorimeter"
        },
        {
          "emoji": "⚖️",
          "name": "Mass balance"
        }
      ],
      "observationsToRecord": [
        "Was the measured T_eq close to calculated? List sources of heat loss:",
        "What happened when you mixed different masses of water?"
      ],
      "theoryPoints": [
        "Thermal equilibrium: heat flows from hotter to cooler body until temperatures equalise.",
        "Conservation of energy: Q_lost (hot) = Q_gained (cold) — assuming no heat loss.",
        "Q = mcΔT relates heat transferred to mass, specific heat, and temperature change."
      ],
      "realWorldConnections": [
        "Mixing hot and cold water in a shower",
        "Cooling a CPU with a heatsink",
        "Tempering chocolate (controlled cooling)"
      ],
      "formula": "Q = mc·ΔT   |   m₁c₁ΔT₁ = m₂c₂ΔT₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "100g of water at 80°C mixes with 100g at 20°C (same c). Equilibrium temperature?",
          "options": [
            "A. 60°C",
            "B. 50°C",
            "C. 40°C",
            "D. 100°C"
          ],
          "correctIndex": 1,
          "explanation": "Equal masses, same specific heat: T_eq = (80+20)/2 = 50°C"
        },
        {
          "text": "What does specific heat capacity measure?",
          "options": [
            "A. Heat needed to melt 1 kg",
            "B. Heat to raise 1 kg by 1°C",
            "C. Heat conducted per second",
            "D. Maximum temperature of a substance"
          ],
          "correctIndex": 1,
          "explanation": "Specific heat c = energy required to raise 1 kg of a substance by 1°C (or 1K)"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Energy Transfer",
          "pct": 50
        },
        {
          "label": "Data Analysis",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Measurement",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Heat and temperature are different. Heat is energy transferred; temperature is a measure of average kinetic energy.",
        "Equal masses don't always reach the midpoint temperature — specific heat matters."
      ],
      "hook": "When you mix hot and cold water, heat flows until temperatures equalise — a beautiful example of thermodynamic equilibrium that governs every heat engine.",
      "khanLinks": [
        {
          "title": "Specific Heat, Heat of Fusion",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        },
        {
          "title": "Thermodynamics (Physics)",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "m_hot (g)",
        "T_hot (°C)",
        "m_cold (g)",
        "T_cold (°C)",
        "T_eq measured (°C)",
        "T_eq calculated (°C)",
        "% Error"
      ],
      "rows": 4
    },
    "observations": [
      "Was the measured T_eq close to calculated? List sources of heat loss:",
      "What happened when you mixed different masses of water?"
    ],
    "conclusion": "State the law of heat exchange. Calculate % error for each trial:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Equilibrium temperature of mixed liquids</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 10 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Q = mc·ΔT &nbsp;&nbsp;|&nbsp;&nbsp; m₁c₁ΔT₁ = m₂c₂ΔT₂</div>Thermal equilibrium: heat flows from hotter to cooler body until temperatures equalise.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Heat and temperature are different. Heat is energy transferred; temperature is a measure of average kinetic energy.</li><li>❌ Equal masses don't always reach the midpoint temperature — specific heat matters.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Mixing hot and cold water in a shower</li><li>🌍 Cooling a CPU with a heatsink</li><li>🌍 Tempering chocolate (controlled cooling)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: T_eq = (m₁T₁ + m₂T₂)/(m₁+m₂) when c is same. Error from heat loss to calorimeter/surroundings. Expect 2–5% error.<br><br>100g at 80°C + 100g at 20°C → T_eq = 50°C. Real T_eq slightly < 50°C due to heat loss.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>When you mix hot and cold water, heat flows until temperatures equalise — a beautiful example of thermodynamic equilibrium that governs every heat engine.</em><br><br>Key concepts to emphasise: Thermal equilibrium: heat flows from hotter to cooler body until temperatures equalise.; Conservation of energy: Q_lost (hot) = Q_gained (cold) — assuming no heat loss.",
        "hook": "Engaging hook for students: <blockquote>When you mix hot and cold water, heat flows until temperatures equalise — a beautiful example of thermodynamic equilibrium that governs every heat engine.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "T_eq = (m₁T₁ + m₂T₂)/(m₁+m₂) when c is same. Error from heat loss to calorimeter/surroundings. Expect 2–5% error.",
      "expected": "100g at 80°C + 100g at 20°C → T_eq = 50°C. Real T_eq slightly < 50°C due to heat loss."
    }
  },
  {
    "num": 20,
    "title": "Heat transfer and thermal insulation",
    "section": "Heat",
    "desc": "Compares insulating materials by measuring cooling rates over time.",
    "setupTime": "10 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Compares insulating materials by measuring cooling rates over time.",
      "instructions": [
        "Which material was the best insulator? Which was the worst?",
        "Describe the shape of the cooling curve (linear, exponential, etc.):",
        "Rank the materials by insulating ability. Explain results in terms of conduction, convection, radiation:"
      ],
      "expectedOutcome": "Newton's Law of Cooling: rate ∝ ΔT. Better insulators show slower cooling rate. Vacuum flask should show nearly flat curve. Metal: fast cooling (high k). Foam: slow. Vacuum flask: very slow. Plot T vs time to see exponential decay."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Thermometer"
        },
        {
          "emoji": "☕",
          "name": "Hot water"
        },
        {
          "emoji": "🧊",
          "name": "Insulating materials"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "📋",
          "name": "Data sheet"
        }
      ],
      "observationsToRecord": [
        "Which material was the best insulator? Which was the worst?",
        "Describe the shape of the cooling curve (linear, exponential, etc.):"
      ],
      "theoryPoints": [
        "Three modes of heat transfer: conduction (solids), convection (fluids), radiation (electromagnetic waves).",
        "Thermal insulators reduce conduction by trapping air (low thermal conductivity).",
        "Rate of heat flow: Q/t = kA(ΔT/d) for conduction (Fourier's Law)."
      ],
      "realWorldConnections": [
        "Double-glazed windows (trapped air insulates)",
        "Astronaut suits (vacuum + reflective layers)",
        "Building insulation (fibreglass/mineral wool)"
      ],
      "formula": "Q/t = k·A·ΔT/d   |   (k = thermal conductivity)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Which heat transfer mode requires no medium (works in vacuum)?",
          "options": [
            "A. Conduction",
            "B. Convection",
            "C. Radiation",
            "D. All three"
          ],
          "correctIndex": 2,
          "explanation": "Radiation transfers heat via electromagnetic waves and needs no medium — it works in space."
        },
        {
          "text": "Why does wrapping food in aluminium foil keep it warm?",
          "options": [
            "A. Foil is a conductor",
            "B. Shiny surfaces reflect infrared radiation",
            "C. Foil traps air",
            "D. Foil absorbs heat"
          ],
          "correctIndex": 1,
          "explanation": "Shiny aluminium reflects infrared radiation, reducing heat loss by radiation."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Energy Transfer",
          "pct": 50
        },
        {
          "label": "Data Analysis",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Cold doesn't flow — only heat flows (from hot to cold). 'Cold coming in' is actually heat going out.",
        "A shiny surface radiates and absorbs less heat — useful in thermos and space blankets."
      ],
      "hook": "A thermos flask uses three layers of protection: vacuum, silvered walls, and air gaps. Understanding heat transfer lets us design everything from spacecraft to winter jackets.",
      "khanLinks": [
        {
          "title": "Heat Transfer",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        },
        {
          "title": "Specific Heat Capacity",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Material/Method",
        "Initial T (°C)",
        "T after 5 min (°C)",
        "T after 10 min (°C)",
        "T after 15 min (°C)",
        "Cooling rate (°C/min)"
      ],
      "rows": 4
    },
    "observations": [
      "Which material was the best insulator? Which was the worst?",
      "Describe the shape of the cooling curve (linear, exponential, etc.):"
    ],
    "conclusion": "Rank the materials by insulating ability. Explain results in terms of conduction, convection, radiation:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Heat transfer and thermal insulation</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 10 min setup + 30 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Q/t = k·A·ΔT/d &nbsp;&nbsp;|&nbsp;&nbsp; (k = thermal conductivity)</div>Three modes of heat transfer: conduction (solids), convection (fluids), radiation (electromagnetic waves).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Cold doesn't flow — only heat flows (from hot to cold). 'Cold coming in' is actually heat going out.</li><li>❌ A shiny surface radiates and absorbs less heat — useful in thermos and space blankets.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Double-glazed windows (trapped air insulates)</li><li>🌍 Astronaut suits (vacuum + reflective layers)</li><li>🌍 Building insulation (fibreglass/mineral wool)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Newton's Law of Cooling: rate ∝ ΔT. Better insulators show slower cooling rate. Vacuum flask should show nearly flat curve.<br><br>Metal: fast cooling (high k). Foam: slow. Vacuum flask: very slow. Plot T vs time to see exponential decay.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A thermos flask uses three layers of protection: vacuum, silvered walls, and air gaps. Understanding heat transfer lets us design everything from spacecraft to winter jackets.</em><br><br>Key concepts to emphasise: Three modes of heat transfer: conduction (solids), convection (fluids), radiation (electromagnetic waves).; Thermal insulators reduce conduction by trapping air (low thermal conductivity).",
        "hook": "Engaging hook for students: <blockquote>A thermos flask uses three layers of protection: vacuum, silvered walls, and air gaps. Understanding heat transfer lets us design everything from spacecraft to winter jackets.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Newton's Law of Cooling: rate ∝ ΔT. Better insulators show slower cooling rate. Vacuum flask should show nearly flat curve.",
      "expected": "Metal: fast cooling (high k). Foam: slow. Vacuum flask: very slow. Plot T vs time to see exponential decay."
    }
  },
  {
    "num": 21,
    "title": "Specific heat capacity of solids",
    "section": "Heat",
    "desc": "Uses a calorimeter to measure specific heat capacity of solid materials.",
    "setupTime": "10 min",
    "duration": "30 min",
    "summary": {
      "whatTheyLearn": "Uses a calorimeter to measure specific heat capacity of solid materials.",
      "instructions": [
        "How did you measure the heat Q supplied to the material?",
        "What corrections did you make for heat loss?",
        "Compare your c values to accepted values. Calculate % error and identify major error sources:"
      ],
      "expectedOutcome": "c = Q/(mΔT). Accepted: Al=900, Fe=450, Cu=385, Pb=128 J/kg·K. Errors from heat loss, thermometer lag. c_Al ≈ 900 J/kg·K ±15%. Lower measured value = heat lost to calorimeter. Higher = heat input overestimated."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚗️",
          "name": "Calorimeter"
        },
        {
          "emoji": "🌡️",
          "name": "Thermometer"
        },
        {
          "emoji": "🏋️",
          "name": "Metal samples"
        },
        {
          "emoji": "⚖️",
          "name": "Mass balance"
        },
        {
          "emoji": "🔥",
          "name": "Bunsen burner"
        }
      ],
      "observationsToRecord": [
        "How did you measure the heat Q supplied to the material?",
        "What corrections did you make for heat loss?"
      ],
      "theoryPoints": [
        "Specific heat capacity c: energy to raise 1 kg of a substance by 1 K.",
        "Water: c ≈ 4200 J/kg·K; metals: c ≈ 100–900 J/kg·K. Water is exceptional.",
        "Calorimetry measures c by heat exchange: Q_in = Q_out in an insulated calorimeter."
      ],
      "realWorldConnections": [
        "Coastal vs continental climate moderation",
        "Central heating systems (water as heat carrier)",
        "Cooking times for different foods"
      ],
      "formula": "Q = mcΔT   |   c = Q/(m·ΔT)"
    },
    "questions": {
      "mcq": [
        {
          "text": "500 g of iron (c=450 J/kg·K) absorbs 900 J. What is ΔT?",
          "options": [
            "A. 2 K",
            "B. 4 K",
            "C. 0.25 K",
            "D. 450 K"
          ],
          "correctIndex": 1,
          "explanation": "ΔT = Q/(mc) = 900/(0.5×450) = 900/225 = 4 K"
        },
        {
          "text": "Why does water moderate coastal climates?",
          "options": [
            "A. Water reflects sunlight",
            "B. High specific heat means slow temperature change",
            "C. Water absorbs CO₂",
            "D. The ocean is always cold"
          ],
          "correctIndex": 1,
          "explanation": "Water's high c means it stores enormous heat with little temperature change, stabilising coastal temperatures."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Energy Transfer",
          "pct": 40
        },
        {
          "label": "Data Analysis",
          "pct": 30
        },
        {
          "label": "Measurement",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "A substance with high specific heat doesn't necessarily feel hotter — it stores more energy per degree.",
        "The calorimeter itself absorbs some heat — this must be corrected in precise experiments."
      ],
      "hook": "Water has an unusually high specific heat — it takes a lot of energy to heat it. This is why coastal cities have milder climates than inland ones.",
      "khanLinks": [
        {
          "title": "Specific Heat Capacity",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        },
        {
          "title": "Thermodynamics (Physics)",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Material",
        "Mass m (g)",
        "Initial T (°C)",
        "Final T (°C)",
        "ΔT (°C)",
        "Q supplied (J)",
        "c measured (J/kg·K)",
        "c accepted (J/kg·K)"
      ],
      "rows": 3
    },
    "observations": [
      "How did you measure the heat Q supplied to the material?",
      "What corrections did you make for heat loss?"
    ],
    "conclusion": "Compare your c values to accepted values. Calculate % error and identify major error sources:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Specific heat capacity of solids</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 10 min setup + 30 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Q = mcΔT &nbsp;&nbsp;|&nbsp;&nbsp; c = Q/(m·ΔT)</div>Specific heat capacity c: energy to raise 1 kg of a substance by 1 K.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ A substance with high specific heat doesn't necessarily feel hotter — it stores more energy per degree.</li><li>❌ The calorimeter itself absorbs some heat — this must be corrected in precise experiments.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Coastal vs continental climate moderation</li><li>🌍 Central heating systems (water as heat carrier)</li><li>🌍 Cooking times for different foods</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: c = Q/(mΔT). Accepted: Al=900, Fe=450, Cu=385, Pb=128 J/kg·K. Errors from heat loss, thermometer lag.<br><br>c_Al ≈ 900 J/kg·K ±15%. Lower measured value = heat lost to calorimeter. Higher = heat input overestimated.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Water has an unusually high specific heat — it takes a lot of energy to heat it. This is why coastal cities have milder climates than inland ones.</em><br><br>Key concepts to emphasise: Specific heat capacity c: energy to raise 1 kg of a substance by 1 K.; Water: c ≈ 4200 J/kg·K; metals: c ≈ 100–900 J/kg·K. Water is exceptional.",
        "hook": "Engaging hook for students: <blockquote>Water has an unusually high specific heat — it takes a lot of energy to heat it. This is why coastal cities have milder climates than inland ones.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "c = Q/(mΔT). Accepted: Al=900, Fe=450, Cu=385, Pb=128 J/kg·K. Errors from heat loss, thermometer lag.",
      "expected": "c_Al ≈ 900 J/kg·K ±15%. Lower measured value = heat lost to calorimeter. Higher = heat input overestimated."
    }
  },
  {
    "num": 22,
    "title": "Heat Sensitivity",
    "section": "Heat",
    "desc": "Evaluates the minimum temperature change a thermometer can reliably detect.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Evaluates the minimum temperature change a thermometer can reliably detect.",
      "instructions": [
        "Which thermometer was most sensitive? Which responded fastest?",
        "Describe the trade-off between sensitivity and response time:",
        "Define thermometer sensitivity. State which thermometer you would recommend for each application (medical, oven, weather):"
      ],
      "expectedOutcome": "Sensitivity = min detectable ΔT. Response time = time to reach stable reading. Clinical thermometer: 0.1°C sensitivity, ~1 min response. Digital clinical: 0.1°C sensitivity, ~30s. Lab thermometer: 0.5°C, ~60s. IR thermometer: 0.5°C, instant."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Thermometers (multiple types)"
        },
        {
          "emoji": "☕",
          "name": "Hot water"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "📋",
          "name": "Comparison table"
        }
      ],
      "observationsToRecord": [
        "Which thermometer was most sensitive? Which responded fastest?",
        "Describe the trade-off between sensitivity and response time:"
      ],
      "theoryPoints": [
        "Thermal sensitivity: the smallest temperature change a thermometer can reliably detect.",
        "Response time: how quickly a sensor reaches thermal equilibrium with its environment.",
        "Liquid-in-glass thermometers expand uniformly — calibration sets the scale."
      ],
      "realWorldConnections": [
        "Medical thermometers (must be fast and accurate)",
        "Oven thermostats",
        "Weather station sensors"
      ],
      "formula": "ΔT_min = sensitivity threshold   |   τ = thermal time constant"
    },
    "questions": {
      "mcq": [
        {
          "text": "A thermometer reads 36.5°C before equilibrium is reached. The reading is:",
          "options": [
            "A. Accurate",
            "B. An underestimate (if measuring something hotter)",
            "C. An overestimate",
            "D. Impossible to say"
          ],
          "correctIndex": 1,
          "explanation": "Before equilibrium, the thermometer hasn't fully 'caught up' to the true temperature if the object is hotter."
        },
        {
          "text": "What property makes a digital medical thermometer useful?",
          "options": [
            "A. Very low sensitivity",
            "B. Fast response time and high sensitivity",
            "C. Large size",
            "D. Mercury filling"
          ],
          "correctIndex": 1,
          "explanation": "Medical thermometers need high sensitivity (small ΔT detectable) and fast response for practical use."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Measurement",
          "pct": 50
        },
        {
          "label": "Energy Transfer",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "A very sensitive thermometer may have a slow response — there is often a sensitivity/speed trade-off.",
        "The thermometer must reach thermal equilibrium with what it's measuring for an accurate reading."
      ],
      "hook": "A thermometer takes time to react to temperature changes — this 'lag' is critical in weather forecasting, medical diagnostics, and industrial process control.",
      "khanLinks": [
        {
          "title": "Temperature & Thermometers",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        },
        {
          "title": "Thermodynamics",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Thermometer type",
        "Min readable ΔT (°C)",
        "Time to stabilise (s)",
        "Test temperature (°C)",
        "Reading (°C)",
        "Error (°C)"
      ],
      "rows": 3
    },
    "observations": [
      "Which thermometer was most sensitive? Which responded fastest?",
      "Describe the trade-off between sensitivity and response time:"
    ],
    "conclusion": "Define thermometer sensitivity. State which thermometer you would recommend for each application (medical, oven, weather):",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Heat Sensitivity</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>ΔT_min = sensitivity threshold &nbsp;&nbsp;|&nbsp;&nbsp; τ = thermal time constant</div>Thermal sensitivity: the smallest temperature change a thermometer can reliably detect.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ A very sensitive thermometer may have a slow response — there is often a sensitivity/speed trade-off.</li><li>❌ The thermometer must reach thermal equilibrium with what it's measuring for an accurate reading.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Medical thermometers (must be fast and accurate)</li><li>🌍 Oven thermostats</li><li>🌍 Weather station sensors</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Sensitivity = min detectable ΔT. Response time = time to reach stable reading. Clinical thermometer: 0.1°C sensitivity, ~1 min response.<br><br>Digital clinical: 0.1°C sensitivity, ~30s. Lab thermometer: 0.5°C, ~60s. IR thermometer: 0.5°C, instant.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A thermometer takes time to react to temperature changes — this 'lag' is critical in weather forecasting, medical diagnostics, and industrial process control.</em><br><br>Key concepts to emphasise: Thermal sensitivity: the smallest temperature change a thermometer can reliably detect.; Response time: how quickly a sensor reaches thermal equilibrium with its environment.",
        "hook": "Engaging hook for students: <blockquote>A thermometer takes time to react to temperature changes — this 'lag' is critical in weather forecasting, medical diagnostics, and industrial process control.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Sensitivity = min detectable ΔT. Response time = time to reach stable reading. Clinical thermometer: 0.1°C sensitivity, ~1 min response.",
      "expected": "Digital clinical: 0.1°C sensitivity, ~30s. Lab thermometer: 0.5°C, ~60s. IR thermometer: 0.5°C, instant."
    }
  },
  {
    "num": 23,
    "title": "Pulse Glass",
    "section": "Heat",
    "desc": "Demonstrates boiling at room temperature using reduced internal pressure.",
    "setupTime": "2 min",
    "duration": "10 min",
    "summary": {
      "whatTheyLearn": "Demonstrates boiling at room temperature using reduced internal pressure.",
      "instructions": [
        "Describe what you observed when holding the warm bulb:",
        "What does the 'boiling' tell you about the vapour pressure of the liquid inside?",
        "Explain why the liquid boils at room temperature. Connect to the concept of vapour pressure:"
      ],
      "expectedOutcome": "The liquid has low boiling point at reduced pressure. Hand warmth (~37°C) is sufficient. Demonstrates pressure-boiling point relationship. Liquid begins cycling in ~10-30s. Demonstrates: boiling point decreases with pressure reduction."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "💨",
          "name": "Pulse glass demonstration kit"
        },
        {
          "emoji": "🌡️",
          "name": "Room thermometer"
        }
      ],
      "observationsToRecord": [
        "Describe what you observed when holding the warm bulb:",
        "What does the 'boiling' tell you about the vapour pressure of the liquid inside?"
      ],
      "theoryPoints": [
        "Vapour pressure: the pressure exerted by a vapour in equilibrium with its liquid.",
        "Reducing pressure lowers boiling point — liquid boils at room temperature under vacuum.",
        "Heat from hands warms one bulb, driving vapour to the other, creating circulation."
      ],
      "realWorldConnections": [
        "Pressure cookers (high P raises boiling point)",
        "Freeze-drying food (low P removes water at low T)",
        "Altitude cooking (lower pressure = lower boiling point)"
      ],
      "formula": "At boiling: P_vapour = P_external   |   Lower P → lower boiling point"
    },
    "questions": {
      "mcq": [
        {
          "text": "Why does water boil at less than 100°C at high altitude?",
          "options": [
            "A. Air is colder",
            "B. Atmospheric pressure is lower",
            "C. Water is less pure",
            "D. Gravity is weaker"
          ],
          "correctIndex": 1,
          "explanation": "Water boils when vapour pressure equals external pressure. Lower P at altitude means less energy needed."
        },
        {
          "text": "A pulse glass 'boils' because:",
          "options": [
            "A. Temperature exceeds 100°C",
            "B. The liquid is volatile with low vapour pressure at room temperature",
            "C. Glass is heated by sunlight",
            "D. Chemical reaction occurs"
          ],
          "correctIndex": 1,
          "explanation": "The liquid has a very low boiling point at reduced internal pressure, so hand warmth is enough."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Energy Transfer",
          "pct": 40
        },
        {
          "label": "States of Matter",
          "pct": 35
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 10
        }
      ],
      "misconceptions": [
        "The liquid in a pulse glass isn't actually boiling at high temperature — it's at very low pressure.",
        "Boiling point is not a fixed property of water — it depends on atmospheric pressure."
      ],
      "hook": "A Pulse Glass seems to 'boil' at room temperature — it's actually demonstrating vapour pressure and the balance between liquid and gas phase at low pressure.",
      "khanLinks": [
        {
          "title": "States of Matter",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/states-of-matter/v/states-of-matter"
        },
        {
          "title": "Phase Changes",
          "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Observation",
        "Temperature of hands (°C)",
        "Temperature of room (°C)",
        "Time for liquid to boil (s)",
        "Number of cycles"
      ],
      "rows": 3
    },
    "observations": [
      "Describe what you observed when holding the warm bulb:",
      "What does the 'boiling' tell you about the vapour pressure of the liquid inside?"
    ],
    "conclusion": "Explain why the liquid boils at room temperature. Connect to the concept of vapour pressure:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Pulse Glass</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 2 min setup + 10 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>At boiling: P_vapour = P_external &nbsp;&nbsp;|&nbsp;&nbsp; Lower P → lower boiling point</div>Vapour pressure: the pressure exerted by a vapour in equilibrium with its liquid.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ The liquid in a pulse glass isn't actually boiling at high temperature — it's at very low pressure.</li><li>❌ Boiling point is not a fixed property of water — it depends on atmospheric pressure.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Pressure cookers (high P raises boiling point)</li><li>🌍 Freeze-drying food (low P removes water at low T)</li><li>🌍 Altitude cooking (lower pressure = lower boiling point)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: The liquid has low boiling point at reduced pressure. Hand warmth (~37°C) is sufficient. Demonstrates pressure-boiling point relationship.<br><br>Liquid begins cycling in ~10-30s. Demonstrates: boiling point decreases with pressure reduction.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A Pulse Glass seems to 'boil' at room temperature — it's actually demonstrating vapour pressure and the balance between liquid and gas phase at low pressure.</em><br><br>Key concepts to emphasise: Vapour pressure: the pressure exerted by a vapour in equilibrium with its liquid.; Reducing pressure lowers boiling point — liquid boils at room temperature under vacuum.",
        "hook": "Engaging hook for students: <blockquote>A Pulse Glass seems to 'boil' at room temperature — it's actually demonstrating vapour pressure and the balance between liquid and gas phase at low pressure.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "The liquid has low boiling point at reduced pressure. Hand warmth (~37°C) is sufficient. Demonstrates pressure-boiling point relationship.",
      "expected": "Liquid begins cycling in ~10-30s. Demonstrates: boiling point decreases with pressure reduction."
    }
  },
  {
    "num": 24,
    "title": "Thermometer’s time constant",
    "section": "Heat",
    "desc": "Measures the exponential response time of a thermometer reaching thermal equilibrium.",
    "setupTime": "5 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Measures the exponential response time of a thermometer reaching thermal equilibrium.",
      "instructions": [
        "Plot T vs t. Describe the shape of the curve:",
        "Plot ln(T_∞ - T) vs t. What shape do you get and what does it mean?",
        "Calculate the time constant τ from the slope of your graph. State how long you should wait for accurate readings:"
      ],
      "expectedOutcome": "T(t) = T_∞(1-e^(-t/τ)). ln(T_∞-T) vs t gives straight line, slope = -1/τ. Typical τ: 10-30s for lab thermometer. τ = 15s → 99% accuracy after 5τ = 75s. Slope of ln graph = -1/τ."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🌡️",
          "name": "Lab thermometer"
        },
        {
          "emoji": "☕",
          "name": "Hot water container"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "📋",
          "name": "Data table"
        }
      ],
      "observationsToRecord": [
        "Plot T vs t. Describe the shape of the curve:",
        "Plot ln(T_∞ - T) vs t. What shape do you get and what does it mean?"
      ],
      "theoryPoints": [
        "Time constant τ: the time for a thermometer to reach (1−1/e) ≈ 63% of the final temperature change.",
        "After 5τ, the thermometer reaches ~99% of the true temperature.",
        "Smaller, lighter sensors have smaller τ — they respond faster."
      ],
      "realWorldConnections": [
        "Medical thermometers (τ ≈ seconds)",
        "Weather station radiation shields",
        "Industrial process control thermocouples"
      ],
      "formula": "T(t) = T_∞ + (T₀−T_∞)·e^(−t/τ)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A thermometer has τ = 10 s. After 10 s in boiling water, it shows approximately:",
          "options": [
            "A. 0% of final temp",
            "B. 37% below final",
            "C. 63% of the way to final",
            "D. 100% of final"
          ],
          "correctIndex": 2,
          "explanation": "After 1τ, the sensor reaches 63% of the total temperature change."
        },
        {
          "text": "To reach 99% accuracy, you should wait approximately:",
          "options": [
            "A. 1τ",
            "B. 2τ",
            "C. 5τ",
            "D. 10τ"
          ],
          "correctIndex": 2,
          "explanation": "After 5 time constants, the reading is within ~1% of true value — practical engineering standard."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Measurement",
          "pct": 45
        },
        {
          "label": "Energy Transfer",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 20
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Reading before equilibrium gives the wrong value — always wait for the reading to stabilise.",
        "Time constant depends on the sensor AND its environment (contact, airflow, etc.)."
      ],
      "hook": "Your fever thermometer must reach your body temperature quickly — but not too quickly to misread. The time constant is the hidden variable in all temperature measurement.",
      "khanLinks": [
        {
          "title": "Specific Heat & Heat Transfer",
          "url": "https://www.khanacademy.org/science/chemistry/thermodynamics-chemistry/internal-energy-sal/v/specific-heat-heat-of-fusion-and-vaporization"
        },
        {
          "title": "Thermodynamics (Physics)",
          "url": "https://www.khanacademy.org/science/physics/thermodynamics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Time t (s)",
        "Temperature T(t) (°C)",
        "T_∞ - T(t) (°C)",
        "ln(T_∞ - T(t))"
      ],
      "rows": 10
    },
    "observations": [
      "Plot T vs t. Describe the shape of the curve:",
      "Plot ln(T_∞ - T) vs t. What shape do you get and what does it mean?"
    ],
    "conclusion": "Calculate the time constant τ from the slope of your graph. State how long you should wait for accurate readings:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Thermometer’s time constant</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>T(t) = T_∞ + (T₀−T_∞)·e^(−t/τ)</div>Time constant τ: the time for a thermometer to reach (1−1/e) ≈ 63% of the final temperature change.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Reading before equilibrium gives the wrong value — always wait for the reading to stabilise.</li><li>❌ Time constant depends on the sensor AND its environment (contact, airflow, etc.).</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Medical thermometers (τ ≈ seconds)</li><li>🌍 Weather station radiation shields</li><li>🌍 Industrial process control thermocouples</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: T(t) = T_∞(1-e^(-t/τ)). ln(T_∞-T) vs t gives straight line, slope = -1/τ. Typical τ: 10-30s for lab thermometer.<br><br>τ = 15s → 99% accuracy after 5τ = 75s. Slope of ln graph = -1/τ.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Your fever thermometer must reach your body temperature quickly — but not too quickly to misread. The time constant is the hidden variable in all temperature measurement.</em><br><br>Key concepts to emphasise: Time constant τ: the time for a thermometer to reach (1−1/e) ≈ 63% of the final temperature change.; After 5τ, the thermometer reaches ~99% of the true temperature.",
        "hook": "Engaging hook for students: <blockquote>Your fever thermometer must reach your body temperature quickly — but not too quickly to misread. The time constant is the hidden variable in all temperature measurement.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "T(t) = T_∞(1-e^(-t/τ)). ln(T_∞-T) vs t gives straight line, slope = -1/τ. Typical τ: 10-30s for lab thermometer.",
      "expected": "τ = 15s → 99% accuracy after 5τ = 75s. Slope of ln graph = -1/τ."
    }
  },
  {
    "num": 26,
    "title": "Use of the Tuning Forks",
    "section": "Acoustics",
    "desc": "Introduces tuning forks as precision sound sources and explores pure-tone vibration.",
    "setupTime": "2 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Introduces tuning forks as precision sound sources and explores pure-tone vibration.",
      "instructions": [
        "Describe how you made the tuning fork vibrate. What did you feel when touching the handle?",
        "What happened when you pressed the tuning fork against a resonant surface?",
        "State the relationship between frequency and period. Compare calculated f with marked f on the fork:"
      ],
      "expectedOutcome": "f = 1/T. Common forks: 256 Hz (C), 440 Hz (A). Touching vibrating surface shows amplitude. Error < 2% is good. 440 Hz fork: T = 1/440 = 0.00227s. 10 vibrations in 0.0227s (requires electronic timing for precision)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🎵",
          "name": "Tuning forks (various Hz)"
        },
        {
          "emoji": "🔨",
          "name": "Rubber mallet"
        },
        {
          "emoji": "💧",
          "name": "Water bowl"
        },
        {
          "emoji": "📋",
          "name": "Frequency chart"
        }
      ],
      "observationsToRecord": [
        "Describe how you made the tuning fork vibrate. What did you feel when touching the handle?",
        "What happened when you pressed the tuning fork against a resonant surface?"
      ],
      "theoryPoints": [
        "A tuning fork vibrates at a precise, stable frequency determined by its geometry and material.",
        "Sound frequency determines pitch; amplitude determines loudness.",
        "Tuning forks produce pure sinusoidal tones (single frequency, no harmonics)."
      ],
      "realWorldConnections": [
        "Musical instrument tuning (concert A = 440 Hz)",
        "Medical testing of hearing and bone conduction",
        "Calibrating audio equipment"
      ],
      "formula": "v = fλ   |   T = 1/f"
    },
    "questions": {
      "mcq": [
        {
          "text": "A tuning fork vibrates at 440 Hz. What is the period of one vibration?",
          "options": [
            "A. 440 s",
            "B. 2.27 ms",
            "C. 44 ms",
            "D. 0.227 s"
          ],
          "correctIndex": 1,
          "explanation": "T = 1/f = 1/440 ≈ 0.00227 s = 2.27 ms"
        },
        {
          "text": "What property of a tuning fork determines its frequency?",
          "options": [
            "A. How hard you strike it",
            "B. Its geometry and material",
            "C. The temperature of air",
            "D. Its colour"
          ],
          "correctIndex": 1,
          "explanation": "The fork's shape (arm length and thickness) and material (elastic modulus, density) determine natural frequency."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Waves & Sound",
          "pct": 55
        },
        {
          "label": "Measurement",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 5
        }
      ],
      "misconceptions": [
        "Higher frequency ≠ louder sound. Frequency = pitch; amplitude = loudness.",
        "A tuning fork works in air but the prongs vibrate — don't touch them while ringing!"
      ],
      "hook": "Tuning forks don't just tune guitars — they proved the wave nature of sound and enabled the first precise measurements of the speed of sound.",
      "khanLinks": [
        {
          "title": "Introduction to Sound",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound/sound-topic/v/introduction-to-sound"
        },
        {
          "title": "Mechanical Waves & Sound",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Tuning fork freq (Hz)",
        "Time for 10 vibrations (s)",
        "Period T (s)",
        "f calculated (Hz)",
        "% Error"
      ],
      "rows": 4
    },
    "observations": [
      "Describe how you made the tuning fork vibrate. What did you feel when touching the handle?",
      "What happened when you pressed the tuning fork against a resonant surface?"
    ],
    "conclusion": "State the relationship between frequency and period. Compare calculated f with marked f on the fork:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Use of the Tuning Forks</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 2 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>v = fλ &nbsp;&nbsp;|&nbsp;&nbsp; T = 1/f</div>A tuning fork vibrates at a precise, stable frequency determined by its geometry and material.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Higher frequency ≠ louder sound. Frequency = pitch; amplitude = loudness.</li><li>❌ A tuning fork works in air but the prongs vibrate — don't touch them while ringing!</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Musical instrument tuning (concert A = 440 Hz)</li><li>🌍 Medical testing of hearing and bone conduction</li><li>🌍 Calibrating audio equipment</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: f = 1/T. Common forks: 256 Hz (C), 440 Hz (A). Touching vibrating surface shows amplitude. Error < 2% is good.<br><br>440 Hz fork: T = 1/440 = 0.00227s. 10 vibrations in 0.0227s (requires electronic timing for precision).",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Tuning forks don't just tune guitars — they proved the wave nature of sound and enabled the first precise measurements of the speed of sound.</em><br><br>Key concepts to emphasise: A tuning fork vibrates at a precise, stable frequency determined by its geometry and material.; Sound frequency determines pitch; amplitude determines loudness.",
        "hook": "Engaging hook for students: <blockquote>Tuning forks don't just tune guitars — they proved the wave nature of sound and enabled the first precise measurements of the speed of sound.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "f = 1/T. Common forks: 256 Hz (C), 440 Hz (A). Touching vibrating surface shows amplitude. Error < 2% is good.",
      "expected": "440 Hz fork: T = 1/440 = 0.00227s. 10 vibrations in 0.0227s (requires electronic timing for precision)."
    }
  },
  {
    "num": 27,
    "title": "The Phenomenon of Resonance",
    "section": "Acoustics",
    "desc": "Demonstrates how maximum oscillation amplitude occurs at the natural frequency.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Demonstrates how maximum oscillation amplitude occurs at the natural frequency.",
      "instructions": [
        "At what frequency did maximum amplitude occur?",
        "Describe what happened above and below the resonant frequency:",
        "State the resonance condition. Give two examples of beneficial and harmful resonance in real life:"
      ],
      "expectedOutcome": "Maximum amplitude = resonance at natural frequency. Response drops sharply away from resonant frequency. Damping reduces peak amplitude. Sharp amplitude peak at natural frequency. Width of peak inversely related to damping."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔔",
          "name": "Resonance apparatus"
        },
        {
          "emoji": "🎵",
          "name": "Tuning fork set"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "📋",
          "name": "Data sheet"
        }
      ],
      "observationsToRecord": [
        "At what frequency did maximum amplitude occur?",
        "Describe what happened above and below the resonant frequency:"
      ],
      "theoryPoints": [
        "Resonance occurs when a driving frequency matches an object's natural (resonant) frequency.",
        "At resonance, amplitude grows rapidly — energy input accumulates rather than dissipating.",
        "Every object has natural frequencies; resonance can be useful or destructive."
      ],
      "realWorldConnections": [
        "Tacoma Narrows bridge collapse (wind resonance)",
        "MRI machines (nuclear magnetic resonance)",
        "Microwave ovens (water molecule resonance)",
        "Musical instruments"
      ],
      "formula": "Resonance: f_drive = f_natural   |   A → maximum"
    },
    "questions": {
      "mcq": [
        {
          "text": "A pendulum has natural frequency 2 Hz. To cause resonance, you should push it at:",
          "options": [
            "A. 1 Hz",
            "B. 2 Hz",
            "C. 4 Hz",
            "D. Any frequency"
          ],
          "correctIndex": 1,
          "explanation": "Resonance occurs when driving frequency matches natural frequency — both at 2 Hz here."
        },
        {
          "text": "Why did the Tacoma Narrows bridge collapse in 1940?",
          "options": [
            "A. Material fatigue",
            "B. Earthquake",
            "C. Wind-induced resonance matched bridge's natural frequency",
            "D. Construction error"
          ],
          "correctIndex": 2,
          "explanation": "Vortex shedding from wind matched the bridge's natural torsional frequency, causing catastrophic resonance."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Waves & Sound",
          "pct": 50
        },
        {
          "label": "Forces & Motion",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Resonance isn't always destructive — it's essential in radios, MRI, music, and lasers.",
        "A system must have some damping or resonance amplitude would be infinite — real systems are limited."
      ],
      "hook": "An opera singer shattering a wine glass with just her voice is resonance in action — energy builds when driving frequency matches natural frequency.",
      "khanLinks": [
        {
          "title": "Wave Properties",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        },
        {
          "title": "Mechanical Waves & Sound",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Driving frequency (Hz)",
        "Amplitude of resonating object",
        "Resonance? (Y/N)",
        "Notes"
      ],
      "rows": 5
    },
    "observations": [
      "At what frequency did maximum amplitude occur?",
      "Describe what happened above and below the resonant frequency:"
    ],
    "conclusion": "State the resonance condition. Give two examples of beneficial and harmful resonance in real life:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>The Phenomenon of Resonance</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Resonance: f_drive = f_natural &nbsp;&nbsp;|&nbsp;&nbsp; A → maximum</div>Resonance occurs when a driving frequency matches an object's natural (resonant) frequency.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Resonance isn't always destructive — it's essential in radios, MRI, music, and lasers.</li><li>❌ A system must have some damping or resonance amplitude would be infinite — real systems are limited.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Tacoma Narrows bridge collapse (wind resonance)</li><li>🌍 MRI machines (nuclear magnetic resonance)</li><li>🌍 Microwave ovens (water molecule resonance)</li><li>🌍 Musical instruments</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Maximum amplitude = resonance at natural frequency. Response drops sharply away from resonant frequency. Damping reduces peak amplitude.<br><br>Sharp amplitude peak at natural frequency. Width of peak inversely related to damping.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>An opera singer shattering a wine glass with just her voice is resonance in action — energy builds when driving frequency matches natural frequency.</em><br><br>Key concepts to emphasise: Resonance occurs when a driving frequency matches an object's natural (resonant) frequency.; At resonance, amplitude grows rapidly — energy input accumulates rather than dissipating.",
        "hook": "Engaging hook for students: <blockquote>An opera singer shattering a wine glass with just her voice is resonance in action — energy builds when driving frequency matches natural frequency.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Maximum amplitude = resonance at natural frequency. Response drops sharply away from resonant frequency. Damping reduces peak amplitude.",
      "expected": "Sharp amplitude peak at natural frequency. Width of peak inversely related to damping."
    }
  },
  {
    "num": 28,
    "title": "Beats and Interference in Acoustics",
    "section": "Acoustics",
    "desc": "Creates audible beats by sounding two slightly different frequencies together.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Creates audible beats by sounding two slightly different frequencies together.",
      "instructions": [
        "Describe the sound you heard when two slightly different frequencies played simultaneously:",
        "How did increasing the frequency difference affect the beats?",
        "State the formula for beat frequency. Explain how musicians use beats to tune instruments:"
      ],
      "expectedOutcome": "f_beat = |f₁ - f₂|. Beat period = 1/f_beat. Slow beats (1-3 Hz) easily heard as wah-wah. At >15 Hz difference, beats merge into roughness. 440 Hz + 444 Hz → 4 beats/second. 440 Hz + 450 Hz → 10 beats/second (harder to distinguish)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🎵",
          "name": "Tuning forks (close freq.)"
        },
        {
          "emoji": "🔨",
          "name": "Rubber mallet"
        },
        {
          "emoji": "⏱️",
          "name": "Stopwatch"
        },
        {
          "emoji": "📋",
          "name": "Data table"
        }
      ],
      "observationsToRecord": [
        "Describe the sound you heard when two slightly different frequencies played simultaneously:",
        "How did increasing the frequency difference affect the beats?"
      ],
      "theoryPoints": [
        "Beats: periodic variation in loudness when two slightly different frequencies interfere.",
        "Beat frequency = |f₁ − f₂| — the closer the frequencies, the slower the beat.",
        "Constructive interference (crests align): louder. Destructive interference (crest+trough): quieter."
      ],
      "realWorldConnections": [
        "Tuning instruments by ear (minimize beats)",
        "Noise-cancelling headphones (destructive interference)",
        "Sonar and radar (beat frequency analysis)"
      ],
      "formula": "f_beat = |f₁ − f₂|   |   Constructive: Δφ = 0, 2π...  Destructive: Δφ = π, 3π..."
    },
    "questions": {
      "mcq": [
        {
          "text": "Two tuning forks vibrate at 440 Hz and 444 Hz. Beat frequency?",
          "options": [
            "A. 884 Hz",
            "B. 4 Hz",
            "C. 440 Hz",
            "D. 2 Hz"
          ],
          "correctIndex": 1,
          "explanation": "f_beat = |444 − 440| = 4 Hz — you hear 4 volume pulses per second."
        },
        {
          "text": "A musician hears 3 beats per second when playing with a 440 Hz reference. Her instrument could be:",
          "options": [
            "A. 437 or 443 Hz",
            "B. 440 Hz",
            "C. 880 Hz",
            "D. Only 443 Hz"
          ],
          "correctIndex": 0,
          "explanation": "f_beat = |f_ref − f_inst| = 3, so f_inst = 440±3 = 437 Hz or 443 Hz."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Waves & Sound",
          "pct": 55
        },
        {
          "label": "Mathematics",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 10
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Beats are NOT a new frequency — they're an amplitude modulation of the original waves.",
        "Destructive interference doesn't destroy energy — it redistributes it to other locations."
      ],
      "hook": "Two slightly out-of-tune guitars create a 'wah-wah' pulsing beat — you're literally hearing wave interference in real time. DJs and instrument tuners use this phenomenon.",
      "khanLinks": [
        {
          "title": "Sound and Wave Interference",
          "url": "https://www.khanacademy.org/science/physics/mechanical-waves-and-sound"
        },
        {
          "title": "Wave Interference",
          "url": "https://www.khanacademy.org/science/ap-physics-1/ap-mechanical-waves-and-sound/wave-interference-ap/v/wave-interference"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "f₁ (Hz)",
        "f₂ (Hz)",
        "f_beat measured (Hz)",
        "f_beat calculated (Hz)",
        "Beat period (s)"
      ],
      "rows": 4
    },
    "observations": [
      "Describe the sound you heard when two slightly different frequencies played simultaneously:",
      "How did increasing the frequency difference affect the beats?"
    ],
    "conclusion": "State the formula for beat frequency. Explain how musicians use beats to tune instruments:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Beats and Interference in Acoustics</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>f_beat = |f₁ − f₂| &nbsp;&nbsp;|&nbsp;&nbsp; Constructive: Δφ = 0, 2π... &nbsp;Destructive: Δφ = π, 3π...</div>Beats: periodic variation in loudness when two slightly different frequencies interfere.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Beats are NOT a new frequency — they're an amplitude modulation of the original waves.</li><li>❌ Destructive interference doesn't destroy energy — it redistributes it to other locations.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Tuning instruments by ear (minimize beats)</li><li>🌍 Noise-cancelling headphones (destructive interference)</li><li>🌍 Sonar and radar (beat frequency analysis)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: f_beat = |f₁ - f₂|. Beat period = 1/f_beat. Slow beats (1-3 Hz) easily heard as wah-wah. At >15 Hz difference, beats merge into roughness.<br><br>440 Hz + 444 Hz → 4 beats/second. 440 Hz + 450 Hz → 10 beats/second (harder to distinguish).",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Two slightly out-of-tune guitars create a 'wah-wah' pulsing beat — you're literally hearing wave interference in real time. DJs and instrument tuners use this phenomenon.</em><br><br>Key concepts to emphasise: Beats: periodic variation in loudness when two slightly different frequencies interfere.; Beat frequency = |f₁ − f₂| — the closer the frequencies, the slower the beat.",
        "hook": "Engaging hook for students: <blockquote>Two slightly out-of-tune guitars create a 'wah-wah' pulsing beat — you're literally hearing wave interference in real time. DJs and instrument tuners use this phenomenon.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "f_beat = |f₁ - f₂|. Beat period = 1/f_beat. Slow beats (1-3 Hz) easily heard as wah-wah. At >15 Hz difference, beats merge into roughness.",
      "expected": "440 Hz + 444 Hz → 4 beats/second. 440 Hz + 450 Hz → 10 beats/second (harder to distinguish)."
    }
  },
  {
    "num": 29,
    "title": "Focal Length",
    "section": "Optics",
    "desc": "Measures focal length of converging lenses using distant objects and ray boxes.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Measures focal length of converging lenses using distant objects and ray boxes.",
      "instructions": [
        "Describe how you found the focal length using a distant object:",
        "What happened to the image when you moved inside the focal length?",
        "State your measured focal lengths and powers. Compare converging vs diverging lens behaviour:"
      ],
      "expectedOutcome": "1/f = 1/u + 1/v. Distant object (u→∞): image at f. Power P = 100/f(cm) = 1/f(m) in dioptres. Convex lens f≈10cm: P=10D. For u=20cm: 1/v = 1/10-1/20 = 1/20 → v=20cm (real, inverted, same size)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔭",
          "name": "Converging lens"
        },
        {
          "emoji": "📏",
          "name": "Optical bench"
        },
        {
          "emoji": "💡",
          "name": "Light source"
        },
        {
          "emoji": "🖊️",
          "name": "Screen"
        }
      ],
      "observationsToRecord": [
        "Describe how you found the focal length using a distant object:",
        "What happened to the image when you moved inside the focal length?"
      ],
      "theoryPoints": [
        "Focal length f: the distance from a converging lens to where parallel rays meet.",
        "Shorter focal length = stronger (more curved) lens.",
        "Real focal point: rays actually converge. Virtual focal point: rays appear to diverge from it."
      ],
      "realWorldConnections": [
        "Reading glasses (diverging for short-sight)",
        "Camera lenses (adjustable focal length)",
        "Telescope objectives (long focal length)"
      ],
      "formula": "P = 1/f    (Power in dioptres, f in metres)"
    },
    "questions": {
      "mcq": [
        {
          "text": "A converging lens has f = 0.25 m. What is its power in dioptres?",
          "options": [
            "A. 0.25 D",
            "B. 4 D",
            "C. 25 D",
            "D. 2.5 D"
          ],
          "correctIndex": 1,
          "explanation": "P = 1/f = 1/0.25 = 4 dioptres"
        },
        {
          "text": "Parallel rays from the sun pass through a lens and converge 10 cm away. What is f?",
          "options": [
            "A. 0.1 m",
            "B. 10 m",
            "C. 1 m",
            "D. 0.01 m"
          ],
          "correctIndex": 0,
          "explanation": "Parallel (distant) rays converge at the focal point: f = 0.1 m = 10 cm"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Optics",
          "pct": 50
        },
        {
          "label": "Mathematics",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "A converging lens can form both real and virtual images depending on object position.",
        "Focal length is a fixed property of a lens, not dependent on where you place objects."
      ],
      "hook": "A magnifying glass, telescope, and the human eye all use the same physics — converging lenses bring parallel rays to a single focal point.",
      "khanLinks": [
        {
          "title": "Convex Lenses",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/convex-lenses"
        },
        {
          "title": "Geometric Optics",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Lens",
        "Object distance u (cm)",
        "Image distance v (cm)",
        "Focal length f (cm)",
        "Power P (D)"
      ],
      "rows": 5
    },
    "observations": [
      "Describe how you found the focal length using a distant object:",
      "What happened to the image when you moved inside the focal length?"
    ],
    "conclusion": "State your measured focal lengths and powers. Compare converging vs diverging lens behaviour:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Focal Length</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>P = 1/f &nbsp;&nbsp; (Power in dioptres, f in metres)</div>Focal length f: the distance from a converging lens to where parallel rays meet.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ A converging lens can form both real and virtual images depending on object position.</li><li>❌ Focal length is a fixed property of a lens, not dependent on where you place objects.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Reading glasses (diverging for short-sight)</li><li>🌍 Camera lenses (adjustable focal length)</li><li>🌍 Telescope objectives (long focal length)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: 1/f = 1/u + 1/v. Distant object (u→∞): image at f. Power P = 100/f(cm) = 1/f(m) in dioptres.<br><br>Convex lens f≈10cm: P=10D. For u=20cm: 1/v = 1/10-1/20 = 1/20 → v=20cm (real, inverted, same size).",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A magnifying glass, telescope, and the human eye all use the same physics — converging lenses bring parallel rays to a single focal point.</em><br><br>Key concepts to emphasise: Focal length f: the distance from a converging lens to where parallel rays meet.; Shorter focal length = stronger (more curved) lens.",
        "hook": "Engaging hook for students: <blockquote>A magnifying glass, telescope, and the human eye all use the same physics — converging lenses bring parallel rays to a single focal point.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "1/f = 1/u + 1/v. Distant object (u→∞): image at f. Power P = 100/f(cm) = 1/f(m) in dioptres.",
      "expected": "Convex lens f≈10cm: P=10D. For u=20cm: 1/v = 1/10-1/20 = 1/20 → v=20cm (real, inverted, same size)."
    }
  },
  {
    "num": 30,
    "title": "Thin Lens Equation",
    "section": "Optics",
    "desc": "Verifies the thin lens equation 1/f = 1/v + 1/u across multiple object distances.",
    "setupTime": "5 min",
    "duration": "25 min",
    "summary": {
      "whatTheyLearn": "Verifies the thin lens equation 1/f = 1/v + 1/u across multiple object distances.",
      "instructions": [
        "At what object distance did the image become virtual?",
        "Describe how the image changed as you moved the object from far to close:",
        "Verify the thin lens equation for each measurement. State when real vs virtual images form:"
      ],
      "expectedOutcome": "Real image: u > f. Virtual image: u < f. m = v/u. m > 0 = upright; m < 0 = inverted. |m| > 1 = magnified. u=∞: v=f (real). u=2f: v=2f (real, same size). u=f: v=∞. u<f: virtual, upright, magnified."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔭",
          "name": "Convex lens"
        },
        {
          "emoji": "📏",
          "name": "Optical bench"
        },
        {
          "emoji": "💡",
          "name": "Light source"
        },
        {
          "emoji": "🖊️",
          "name": "Screen"
        },
        {
          "emoji": "📋",
          "name": "Data table"
        }
      ],
      "observationsToRecord": [
        "At what object distance did the image become virtual?",
        "Describe how the image changed as you moved the object from far to close:"
      ],
      "theoryPoints": [
        "Thin lens equation: 1/f = 1/v − 1/u (or 1/do + 1/di = 1/f in some conventions).",
        "Real images: rays actually converge; can be projected on a screen.",
        "Virtual images: rays appear to diverge from; cannot be projected (e.g., magnifying glass)."
      ],
      "realWorldConnections": [
        "Camera focussing (adjusting image distance)",
        "Projector alignment",
        "Eye optometry corrections"
      ],
      "formula": "1/f = 1/v − 1/u   |   m = v/u (magnification)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Object 30 cm from a 10 cm focal length lens. Where is the image?",
          "options": [
            "A. 15 cm",
            "B. 20 cm",
            "C. 10 cm",
            "D. 30 cm"
          ],
          "correctIndex": 0,
          "explanation": "1/v = 1/f − 1/(-u)... using 1/10 = 1/v + 1/30 → 1/v = 1/10−1/30 = 2/30 → v=15 cm"
        },
        {
          "text": "An image forms on the same side as the object. The image is:",
          "options": [
            "A. Real and inverted",
            "B. Virtual and upright",
            "C. Real and upright",
            "D. Virtual and inverted"
          ],
          "correctIndex": 1,
          "explanation": "Virtual images form on the same side as the object and are always upright in a converging lens."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Optics",
          "pct": 45
        },
        {
          "label": "Mathematics",
          "pct": 30
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Sign conventions vary — always state which convention you use (real-is-positive vs Cartesian).",
        "A virtual image is not 'fake' — it looks just as real to the eye; it just can't be projected."
      ],
      "hook": "The thin lens equation connects object distance, image distance, and focal length — it's the recipe behind every camera, projector, and human eye correction.",
      "khanLinks": [
        {
          "title": "Thin Lens Equation",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/thin-lens-equation-and-problem-solving"
        },
        {
          "title": "Geometric Optics",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Object dist u (cm)",
        "Image dist v (cm)",
        "f from equation (cm)",
        "Magnification m",
        "Image type (R/V)",
        "Image orientation (U/I)"
      ],
      "rows": 6
    },
    "observations": [
      "At what object distance did the image become virtual?",
      "Describe how the image changed as you moved the object from far to close:"
    ],
    "conclusion": "Verify the thin lens equation for each measurement. State when real vs virtual images form:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Thin Lens Equation</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 25 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>1/f = 1/v − 1/u &nbsp;&nbsp;|&nbsp;&nbsp; m = v/u (magnification)</div>Thin lens equation: 1/f = 1/v − 1/u (or 1/do + 1/di = 1/f in some conventions).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Sign conventions vary — always state which convention you use (real-is-positive vs Cartesian).</li><li>❌ A virtual image is not 'fake' — it looks just as real to the eye; it just can't be projected.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Camera focussing (adjusting image distance)</li><li>🌍 Projector alignment</li><li>🌍 Eye optometry corrections</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Real image: u > f. Virtual image: u < f. m = v/u. m > 0 = upright; m < 0 = inverted. |m| > 1 = magnified.<br><br>u=∞: v=f (real). u=2f: v=2f (real, same size). u=f: v=∞. u<f: virtual, upright, magnified.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>The thin lens equation connects object distance, image distance, and focal length — it's the recipe behind every camera, projector, and human eye correction.</em><br><br>Key concepts to emphasise: Thin lens equation: 1/f = 1/v − 1/u (or 1/do + 1/di = 1/f in some conventions).; Real images: rays actually converge; can be projected on a screen.",
        "hook": "Engaging hook for students: <blockquote>The thin lens equation connects object distance, image distance, and focal length — it's the recipe behind every camera, projector, and human eye correction.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Real image: u > f. Virtual image: u < f. m = v/u. m > 0 = upright; m < 0 = inverted. |m| > 1 = magnified.",
      "expected": "u=∞: v=f (real). u=2f: v=2f (real, same size). u=f: v=∞. u<f: virtual, upright, magnified."
    }
  },
  {
    "num": 31,
    "title": "Magnification",
    "section": "Optics",
    "desc": "Measures and compares linear magnification from image/object heights and distances.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Measures and compares linear magnification from image/object heights and distances.",
      "instructions": [
        "Did linear magnification from heights match magnification from distances?",
        "Describe the difference between real and virtual magnification:",
        "State the magnification formula. At what distance is magnification = 1 (same size image)?"
      ],
      "expectedOutcome": "m = hi/ho = di/do. Same size when u = v = 2f. |m| > 1 means larger image. m negative means inverted. u=2f=20cm (f=10cm): m = 1, image same size. u=15cm: m = 2 (magnified). u=5cm<f: m virtual."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔭",
          "name": "Lens set"
        },
        {
          "emoji": "📏",
          "name": "Optical bench"
        },
        {
          "emoji": "💡",
          "name": "Object source"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        }
      ],
      "observationsToRecord": [
        "Did linear magnification from heights match magnification from distances?",
        "Describe the difference between real and virtual magnification:"
      ],
      "theoryPoints": [
        "Linear magnification m = image height / object height = image distance / object distance.",
        "Angular magnification: how much larger an object appears compared to naked eye view.",
        "Compound microscope: objective lens produces real image magnified by eyepiece."
      ],
      "realWorldConnections": [
        "Medical microscopy for cell and pathogen analysis",
        "Camera zoom lenses",
        "Astronomical telescopes"
      ],
      "formula": "m = hᵢ/h₀ = dᵢ/d₀   |   m < 0 means inverted"
    },
    "questions": {
      "mcq": [
        {
          "text": "An object 2 mm tall has image 10 mm tall. What is the magnification?",
          "options": [
            "A. 0.2×",
            "B. 5×",
            "C. 20×",
            "D. 12×"
          ],
          "correctIndex": 1,
          "explanation": "m = image/object = 10/2 = 5× magnification"
        },
        {
          "text": "Magnification = −3. The image is:",
          "options": [
            "A. 3× larger and upright",
            "B. 3× larger and inverted",
            "C. 3× smaller and inverted",
            "D. Same size"
          ],
          "correctIndex": 1,
          "explanation": "Magnitude 3 means 3× larger; negative sign means inverted image."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Optics",
          "pct": 50
        },
        {
          "label": "Mathematics",
          "pct": 25
        },
        {
          "label": "Measurement",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Higher magnification is not always better — resolution limits what is actually useful.",
        "A negative magnification means the image is inverted, not smaller."
      ],
      "hook": "A microscope can see a single bacterium (1 micron). A radio telescope sees galaxies billions of light-years away. Both use the same magnification mathematics.",
      "khanLinks": [
        {
          "title": "Image Height & Distance",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/object-image-height-and-distance-relationship"
        },
        {
          "title": "Thin Lens Equation",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses/v/thin-lens-equation-and-problem-solving"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Object height (mm)",
        "Image height (mm)",
        "Object distance (cm)",
        "Image distance (cm)",
        "m = hi/ho",
        "m = di/do",
        "Match?"
      ],
      "rows": 4
    },
    "observations": [
      "Did linear magnification from heights match magnification from distances?",
      "Describe the difference between real and virtual magnification:"
    ],
    "conclusion": "State the magnification formula. At what distance is magnification = 1 (same size image)?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Magnification</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>m = hᵢ/h₀ = dᵢ/d₀ &nbsp;&nbsp;|&nbsp;&nbsp; m < 0 means inverted</div>Linear magnification m = image height / object height = image distance / object distance.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Higher magnification is not always better — resolution limits what is actually useful.</li><li>❌ A negative magnification means the image is inverted, not smaller.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Medical microscopy for cell and pathogen analysis</li><li>🌍 Camera zoom lenses</li><li>🌍 Astronomical telescopes</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: m = hi/ho = di/do. Same size when u = v = 2f. |m| > 1 means larger image. m negative means inverted.<br><br>u=2f=20cm (f=10cm): m = 1, image same size. u=15cm: m = 2 (magnified). u=5cm<f: m virtual.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A microscope can see a single bacterium (1 micron). A radio telescope sees galaxies billions of light-years away. Both use the same magnification mathematics.</em><br><br>Key concepts to emphasise: Linear magnification m = image height / object height = image distance / object distance.; Angular magnification: how much larger an object appears compared to naked eye view.",
        "hook": "Engaging hook for students: <blockquote>A microscope can see a single bacterium (1 micron). A radio telescope sees galaxies billions of light-years away. Both use the same magnification mathematics.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "m = hi/ho = di/do. Same size when u = v = 2f. |m| > 1 means larger image. m negative means inverted.",
      "expected": "u=2f=20cm (f=10cm): m = 1, image same size. u=15cm: m = 2 (magnified). u=5cm<f: m virtual."
    }
  },
  {
    "num": 32,
    "title": "Mixing of Colours",
    "section": "Optics",
    "desc": "Demonstrates additive colour mixing with coloured lights to produce white light.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Demonstrates additive colour mixing with coloured lights to produce white light.",
      "instructions": [
        "Describe the difference between additive (light) and subtractive (pigment) mixing:",
        "Which combination surprised you most? Why?",
        "State the primary colours for additive mixing. Explain why a TV screen can produce all colours:"
      ],
      "expectedOutcome": "Additive: R+G=Y, G+B=Cyan, R+B=Magenta, R+G+B=White. Subtractive: opposite primaries (CMY). TV=additive RGB pixels. Light: R+G=Yellow (not red+green=brown). Pigment: opposite behaviour. Always specify mixing type."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "💡",
          "name": "RGB light sources"
        },
        {
          "emoji": "🌑",
          "name": "Dark room"
        },
        {
          "emoji": "🖊️",
          "name": "White screen"
        },
        {
          "emoji": "🎨",
          "name": "Colour filters"
        }
      ],
      "observationsToRecord": [
        "Describe the difference between additive (light) and subtractive (pigment) mixing:",
        "Which combination surprised you most? Why?"
      ],
      "theoryPoints": [
        "White light is a mixture of all visible wavelengths (colours).",
        "Additive colour mixing (light): Red + Green + Blue = White.",
        "Subtractive colour mixing (pigments): Cyan + Magenta + Yellow = Black."
      ],
      "realWorldConnections": [
        "RGB screens (pixels mix light additively)",
        "Colour printing (CMYK ink)",
        "Stage lighting design",
        "Sunset colours (Rayleigh scattering)"
      ],
      "formula": "Additive: R+G+B = White   |   Subtractive: C+M+Y = Black"
    },
    "questions": {
      "mcq": [
        {
          "text": "In additive colour mixing, Red + Green = ?",
          "options": [
            "A. Brown",
            "B. Yellow",
            "C. Orange",
            "D. White"
          ],
          "correctIndex": 1,
          "explanation": "Additive mixing (light): R+G = Yellow. This is different from pigment mixing."
        },
        {
          "text": "Computer monitors use additive colour mixing with:",
          "options": [
            "A. C, M, Y pixels",
            "B. R, G, B pixels",
            "C. Only red and blue",
            "D. White and black pixels"
          ],
          "correctIndex": 1,
          "explanation": "LCD/LED screens use tiny Red, Green, Blue sub-pixels that mix additively to produce all colours."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Optics",
          "pct": 50
        },
        {
          "label": "Waves & Light",
          "pct": 30
        },
        {
          "label": "Scientific Method",
          "pct": 10
        },
        {
          "label": "Real-World Apps",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Mixing paints is subtractive, not additive — red+green paint makes brown, not yellow.",
        "Coloured light mixes differently to pigments — an important distinction for artists vs lighting designers."
      ],
      "hook": "White light is a mixture of all rainbow colours. Newton proved this by splitting sunlight with a prism — and then recombining the colours back to white with a second prism.",
      "khanLinks": [
        {
          "title": "Visible Light & the EM Spectrum",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/visible-light-and-the-electromagnetic-spectrum"
        },
        {
          "title": "Light Waves",
          "url": "https://www.khanacademy.org/science/physics/light-waves"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Colours mixed",
        "Predicted result",
        "Observed result",
        "Mixing type (additive/subtractive)",
        "Match? (Y/N)"
      ],
      "rows": 6
    },
    "observations": [
      "Describe the difference between additive (light) and subtractive (pigment) mixing:",
      "Which combination surprised you most? Why?"
    ],
    "conclusion": "State the primary colours for additive mixing. Explain why a TV screen can produce all colours:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Mixing of Colours</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Additive: R+G+B = White &nbsp;&nbsp;|&nbsp;&nbsp; Subtractive: C+M+Y = Black</div>White light is a mixture of all visible wavelengths (colours).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Mixing paints is subtractive, not additive — red+green paint makes brown, not yellow.</li><li>❌ Coloured light mixes differently to pigments — an important distinction for artists vs lighting designers.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 RGB screens (pixels mix light additively)</li><li>🌍 Colour printing (CMYK ink)</li><li>🌍 Stage lighting design</li><li>🌍 Sunset colours (Rayleigh scattering)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Additive: R+G=Y, G+B=Cyan, R+B=Magenta, R+G+B=White. Subtractive: opposite primaries (CMY). TV=additive RGB pixels.<br><br>Light: R+G=Yellow (not red+green=brown). Pigment: opposite behaviour. Always specify mixing type.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>White light is a mixture of all rainbow colours. Newton proved this by splitting sunlight with a prism — and then recombining the colours back to white with a second prism.</em><br><br>Key concepts to emphasise: White light is a mixture of all visible wavelengths (colours).; Additive colour mixing (light): Red + Green + Blue = White.",
        "hook": "Engaging hook for students: <blockquote>White light is a mixture of all rainbow colours. Newton proved this by splitting sunlight with a prism — and then recombining the colours back to white with a second prism.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Additive: R+G=Y, G+B=Cyan, R+B=Magenta, R+G+B=White. Subtractive: opposite primaries (CMY). TV=additive RGB pixels.",
      "expected": "Light: R+G=Yellow (not red+green=brown). Pigment: opposite behaviour. Always specify mixing type."
    }
  },
  {
    "num": 33,
    "title": "Microscope – Telescope",
    "section": "Optics",
    "desc": "Builds a compound microscope and refracting telescope from two lenses.",
    "setupTime": "8 min",
    "duration": "25 min",
    "summary": {
      "whatTheyLearn": "Builds a compound microscope and refracting telescope from two lenses.",
      "instructions": [
        "Describe what you saw through the microscope/telescope. Was the image upright or inverted?",
        "How did changing the eyepiece affect the magnification?",
        "State the magnification formula for each instrument. Compare theoretical vs measured magnification:"
      ],
      "expectedOutcome": "Telescope M = f_obj/f_eye. Microscope M = (tube length/f_obj) × (25cm/f_eye). Telescope inverts image. Telescope: f_obj=30cm, f_eye=5cm → M=6×. Image inverted. Field of view decreases with magnification."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🔬",
          "name": "Objective lens"
        },
        {
          "emoji": "🔭",
          "name": "Eyepiece lens"
        },
        {
          "emoji": "📏",
          "name": "Optical bench"
        },
        {
          "emoji": "💡",
          "name": "Light source"
        }
      ],
      "observationsToRecord": [
        "Describe what you saw through the microscope/telescope. Was the image upright or inverted?",
        "How did changing the eyepiece affect the magnification?"
      ],
      "theoryPoints": [
        "Compound microscope: short-focal-length objective + eyepiece; total m = m_obj × m_eye.",
        "Refracting telescope: long-focal-length objective collects light; eyepiece magnifies.",
        "Telescope magnification = f_objective / f_eyepiece."
      ],
      "realWorldConnections": [
        "Medical diagnosis under microscope",
        "Astronomical observation",
        "Binoculars (dual telescope)"
      ],
      "formula": "Microscope: M = (L/f_obj) × (25/f_eye)   |   Telescope: M = f_obj/f_eye"
    },
    "questions": {
      "mcq": [
        {
          "text": "A telescope has objective f=100 cm and eyepiece f=5 cm. Magnification?",
          "options": [
            "A. 20×",
            "B. 5×",
            "C. 100×",
            "D. 500×"
          ],
          "correctIndex": 0,
          "explanation": "M = f_obj/f_eye = 100/5 = 20×"
        },
        {
          "text": "To get higher magnification from a telescope, you should:",
          "options": [
            "A. Use a longer eyepiece focal length",
            "B. Use a shorter eyepiece focal length",
            "C. Use a shorter objective",
            "D. Increase the tube length"
          ],
          "correctIndex": 1,
          "explanation": "M = f_obj/f_eye — smaller f_eye gives higher magnification."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Optics",
          "pct": 55
        },
        {
          "label": "Mathematics",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 10
        },
        {
          "label": "Real-World Apps",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Bigger telescope is not just about magnification — light-gathering (aperture) is often more important.",
        "A microscope forms a real intermediate image; a telescope typically doesn't."
      ],
      "hook": "Galileo's first telescope had a magnification of just 8× — yet it was enough to discover Jupiter's moons and overturn 2000 years of cosmology.",
      "khanLinks": [
        {
          "title": "Lenses (Geometric Optics)",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/lenses"
        },
        {
          "title": "Geometric Optics",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Instrument",
        "f_objective (cm)",
        "f_eyepiece (cm)",
        "Theoretical M",
        "Measured M",
        "% Error"
      ],
      "rows": 2
    },
    "observations": [
      "Describe what you saw through the microscope/telescope. Was the image upright or inverted?",
      "How did changing the eyepiece affect the magnification?"
    ],
    "conclusion": "State the magnification formula for each instrument. Compare theoretical vs measured magnification:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Microscope – Telescope</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 8 min setup + 25 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Microscope: M = (L/f_obj) × (25/f_eye) &nbsp;&nbsp;|&nbsp;&nbsp; Telescope: M = f_obj/f_eye</div>Compound microscope: short-focal-length objective + eyepiece; total m = m_obj × m_eye.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Bigger telescope is not just about magnification — light-gathering (aperture) is often more important.</li><li>❌ A microscope forms a real intermediate image; a telescope typically doesn't.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Medical diagnosis under microscope</li><li>🌍 Astronomical observation</li><li>🌍 Binoculars (dual telescope)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Telescope M = f_obj/f_eye. Microscope M = (tube length/f_obj) × (25cm/f_eye). Telescope inverts image.<br><br>Telescope: f_obj=30cm, f_eye=5cm → M=6×. Image inverted. Field of view decreases with magnification.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Galileo's first telescope had a magnification of just 8× — yet it was enough to discover Jupiter's moons and overturn 2000 years of cosmology.</em><br><br>Key concepts to emphasise: Compound microscope: short-focal-length objective + eyepiece; total m = m_obj × m_eye.; Refracting telescope: long-focal-length objective collects light; eyepiece magnifies.",
        "hook": "Engaging hook for students: <blockquote>Galileo's first telescope had a magnification of just 8× — yet it was enough to discover Jupiter's moons and overturn 2000 years of cosmology.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Telescope M = f_obj/f_eye. Microscope M = (tube length/f_obj) × (25cm/f_eye). Telescope inverts image.",
      "expected": "Telescope: f_obj=30cm, f_eye=5cm → M=6×. Image inverted. Field of view decreases with magnification."
    }
  },
  {
    "num": 34,
    "title": "Prism: Composition of Light",
    "section": "Optics",
    "desc": "Disperses white light with a glass prism to reveal the visible spectrum.",
    "setupTime": "5 min",
    "duration": "25 min",
    "summary": {
      "whatTheyLearn": "Disperses white light with a glass prism to reveal the visible spectrum.",
      "instructions": [
        "List the colours observed in order from least to most deviated:",
        "What happened when you used a second prism to recombine the spectrum?",
        "Explain dispersion. State which colour has the highest refractive index in glass and why:"
      ],
      "expectedOutcome": "Order: Red(700nm), Orange(620nm), Yellow(580nm), Green(530nm), Blue(470nm), Indigo, Violet(400nm). Violet most deviated (highest n). ROYGBIV order. Violet deviates most (~45-50°), red least (~40-45°) for typical glass prism."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "💎",
          "name": "Glass prism"
        },
        {
          "emoji": "💡",
          "name": "White light source"
        },
        {
          "emoji": "🌑",
          "name": "Dark room"
        },
        {
          "emoji": "🖊️",
          "name": "White screen"
        }
      ],
      "observationsToRecord": [
        "List the colours observed in order from least to most deviated:",
        "What happened when you used a second prism to recombine the spectrum?"
      ],
      "theoryPoints": [
        "A glass prism disperses white light because different wavelengths refract at different angles.",
        "Shorter wavelengths (violet) bend more than longer ones (red) — dispersion.",
        "Snell's Law: n₁ sinθ₁ = n₂ sinθ₂ governs refraction at each surface."
      ],
      "realWorldConnections": [
        "Rainbows (water droplets as prisms)",
        "Diamond sparkle (total internal reflection + dispersion)",
        "Spectroscopy (identifying elements by light spectrum)"
      ],
      "formula": "n = c/v   |   n₁ sinθ₁ = n₂ sinθ₂"
    },
    "questions": {
      "mcq": [
        {
          "text": "Which colour bends most when entering a glass prism from air?",
          "options": [
            "A. Red",
            "B. Yellow",
            "C. Violet",
            "D. Green"
          ],
          "correctIndex": 2,
          "explanation": "Higher frequency (shorter wavelength) = more refraction. Violet bends most, red bends least."
        },
        {
          "text": "Light goes from glass (n=1.5) to air (n=1). If θ_glass = 30°, what is θ_air?",
          "options": [
            "A. 20°",
            "B. 45°",
            "C. 48.6°",
            "D. 30°"
          ],
          "correctIndex": 2,
          "explanation": "1.5 × sin30° = 1 × sinθ → sinθ = 0.75 → θ ≈ 48.6°"
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Optics",
          "pct": 50
        },
        {
          "label": "Waves & Light",
          "pct": 30
        },
        {
          "label": "Data Analysis",
          "pct": 10
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Light slows down in glass — it doesn't 'bend' due to magic, but due to speed change at the boundary.",
        "The colours of a spectrum are continuous — not seven discrete bands. Newton chose 7 to match musical notes."
      ],
      "hook": "A rainbow is a prism made of raindrops — each drop splits sunlight by wavelength, and your eye sees a perfect arc of spectral colours.",
      "khanLinks": [
        {
          "title": "Refraction & Snell's Law",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/reflection-refraction/v/refraction-and-snell-s-law"
        },
        {
          "title": "Visible Light & the EM Spectrum",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/visible-light-and-the-electromagnetic-spectrum"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Colour observed",
        "Approximate wavelength (nm)",
        "Deviation angle (°)",
        "Notes"
      ],
      "rows": 7
    },
    "observations": [
      "List the colours observed in order from least to most deviated:",
      "What happened when you used a second prism to recombine the spectrum?"
    ],
    "conclusion": "Explain dispersion. State which colour has the highest refractive index in glass and why:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Prism: Composition of Light</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 25 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>n = c/v &nbsp;&nbsp;|&nbsp;&nbsp; n₁ sinθ₁ = n₂ sinθ₂</div>A glass prism disperses white light because different wavelengths refract at different angles.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Light slows down in glass — it doesn't 'bend' due to magic, but due to speed change at the boundary.</li><li>❌ The colours of a spectrum are continuous — not seven discrete bands. Newton chose 7 to match musical notes.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Rainbows (water droplets as prisms)</li><li>🌍 Diamond sparkle (total internal reflection + dispersion)</li><li>🌍 Spectroscopy (identifying elements by light spectrum)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Order: Red(700nm), Orange(620nm), Yellow(580nm), Green(530nm), Blue(470nm), Indigo, Violet(400nm). Violet most deviated (highest n).<br><br>ROYGBIV order. Violet deviates most (~45-50°), red least (~40-45°) for typical glass prism.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>A rainbow is a prism made of raindrops — each drop splits sunlight by wavelength, and your eye sees a perfect arc of spectral colours.</em><br><br>Key concepts to emphasise: A glass prism disperses white light because different wavelengths refract at different angles.; Shorter wavelengths (violet) bend more than longer ones (red) — dispersion.",
        "hook": "Engaging hook for students: <blockquote>A rainbow is a prism made of raindrops — each drop splits sunlight by wavelength, and your eye sees a perfect arc of spectral colours.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Order: Red(700nm), Orange(620nm), Yellow(580nm), Green(530nm), Blue(470nm), Indigo, Violet(400nm). Violet most deviated (highest n).",
      "expected": "ROYGBIV order. Violet deviates most (~45-50°), red least (~40-45°) for typical glass prism."
    }
  },
  {
    "num": 35,
    "title": "Shadows and Penumbra",
    "section": "Optics",
    "desc": "Demonstrates umbra and penumbra formation with point and extended light sources.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Demonstrates umbra and penumbra formation with point and extended light sources.",
      "instructions": [
        "How did source size affect the penumbra width?",
        "Describe the difference between a point source shadow and an extended source shadow:",
        "Define umbra and penumbra. Explain why a large source creates softer shadows:"
      ],
      "expectedOutcome": "Larger source → wider penumbra → softer shadow. Point source → sharp umbra only. Penumbra width ∝ source size × (screen dist / object dist). Point source: sharp shadow only. 5cm source at 20cm from object, screen 40cm away → penumbra ≈ 10cm wide."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "💡",
          "name": "Point light source"
        },
        {
          "emoji": "💡",
          "name": "Extended light source"
        },
        {
          "emoji": "📦",
          "name": "Opaque object"
        },
        {
          "emoji": "🖊️",
          "name": "Screen"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        }
      ],
      "observationsToRecord": [
        "How did source size affect the penumbra width?",
        "Describe the difference between a point source shadow and an extended source shadow:"
      ],
      "theoryPoints": [
        "Umbra: region of total shadow where no direct light reaches.",
        "Penumbra: partial shadow region receiving light from part of the source.",
        "Extended light sources create penumbras; point sources create only umbras."
      ],
      "realWorldConnections": [
        "Solar and lunar eclipses (umbra/penumbra)",
        "Photography: soft vs hard lighting",
        "Sundials (shadow clock)"
      ],
      "formula": "Shadow size depends on: source size, object size, and distances"
    },
    "questions": {
      "mcq": [
        {
          "text": "During a solar eclipse, people in the penumbra see:",
          "options": [
            "A. Total eclipse (no sun)",
            "B. Partial eclipse (sun partly visible)",
            "C. No eclipse at all",
            "D. Full sunlight"
          ],
          "correctIndex": 1,
          "explanation": "The penumbra receives partial light from the sun — you see a partial eclipse from there."
        },
        {
          "text": "Why do LED spotlights create sharper shadows than fluorescent tubes?",
          "options": [
            "A. LEDs are brighter",
            "B. LEDs are closer point sources",
            "C. Fluorescent tubes emit more UV",
            "D. LEDs are cooler"
          ],
          "correctIndex": 1,
          "explanation": "A point source (small LED) creates a well-defined umbra with minimal penumbra — sharp shadow."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Optics",
          "pct": 50
        },
        {
          "label": "Geometry",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 10
        }
      ],
      "misconceptions": [
        "The sun is an extended source — it creates both umbra and penumbra, not just a sharp shadow.",
        "Soft shadows in photography are caused by large, diffuse light sources creating broad penumbras."
      ],
      "hook": "The sharp shadow of your hand and the soft penumbra of a solar eclipse are the same physics, just different scales. Ancient astronomers used shadows to measure Earth's circumference.",
      "khanLinks": [
        {
          "title": "Introduction to Light",
          "url": "https://www.khanacademy.org/science/physics/light-waves/introduction-to-light-waves/v/introduction-to-light"
        },
        {
          "title": "Geometric Optics",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Source size (cm)",
        "Object size (cm)",
        "Screen distance (cm)",
        "Umbra width (cm)",
        "Penumbra width (cm)",
        "Sharpness (1-5)"
      ],
      "rows": 4
    },
    "observations": [
      "How did source size affect the penumbra width?",
      "Describe the difference between a point source shadow and an extended source shadow:"
    ],
    "conclusion": "Define umbra and penumbra. Explain why a large source creates softer shadows:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Shadows and Penumbra</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Shadow size depends on: source size, object size, and distances</div>Umbra: region of total shadow where no direct light reaches.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ The sun is an extended source — it creates both umbra and penumbra, not just a sharp shadow.</li><li>❌ Soft shadows in photography are caused by large, diffuse light sources creating broad penumbras.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Solar and lunar eclipses (umbra/penumbra)</li><li>🌍 Photography: soft vs hard lighting</li><li>🌍 Sundials (shadow clock)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Larger source → wider penumbra → softer shadow. Point source → sharp umbra only. Penumbra width ∝ source size × (screen dist / object dist).<br><br>Point source: sharp shadow only. 5cm source at 20cm from object, screen 40cm away → penumbra ≈ 10cm wide.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>The sharp shadow of your hand and the soft penumbra of a solar eclipse are the same physics, just different scales. Ancient astronomers used shadows to measure Earth's circumference.</em><br><br>Key concepts to emphasise: Umbra: region of total shadow where no direct light reaches.; Penumbra: partial shadow region receiving light from part of the source.",
        "hook": "Engaging hook for students: <blockquote>The sharp shadow of your hand and the soft penumbra of a solar eclipse are the same physics, just different scales. Ancient astronomers used shadows to measure Earth's circumference.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Larger source → wider penumbra → softer shadow. Point source → sharp umbra only. Penumbra width ∝ source size × (screen dist / object dist).",
      "expected": "Point source: sharp shadow only. 5cm source at 20cm from object, screen 40cm away → penumbra ≈ 10cm wide."
    }
  },
  {
    "num": 36,
    "title": "Mirrors",
    "section": "Optics",
    "desc": "Compares plane, concave, and convex mirror image properties.",
    "setupTime": "5 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Compares plane, concave, and convex mirror image properties.",
      "instructions": [
        "Describe differences between plane, concave, and convex mirror images:",
        "At what object distance did the concave mirror produce a same-size image?",
        "State the mirror equation. Compare focal lengths of concave and convex mirrors:"
      ],
      "expectedOutcome": "1/f = 1/v + 1/u (sign convention: real=positive for mirrors). Plane mirror: v=-u (virtual). Concave f>0; Convex f<0. Concave f=10cm: u=20cm → v=20cm (real, inverted). u=5cm → v=-10cm (virtual, upright, 2×magnified)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🪞",
          "name": "Plane mirror"
        },
        {
          "emoji": "🪞",
          "name": "Concave mirror"
        },
        {
          "emoji": "🪞",
          "name": "Convex mirror"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "💡",
          "name": "Light source"
        }
      ],
      "observationsToRecord": [
        "Describe differences between plane, concave, and convex mirror images:",
        "At what object distance did the concave mirror produce a same-size image?"
      ],
      "theoryPoints": [
        "Law of reflection: angle of incidence = angle of reflection (both measured from normal).",
        "Plane mirror: virtual, upright, same-size image at same distance behind mirror.",
        "Curved mirrors: concave converges (focus), convex diverges (wide field of view)."
      ],
      "realWorldConnections": [
        "Car rear-view mirrors (convex = wide view)",
        "Dental examination mirrors (concave = magnified)",
        "Telescope primary mirror",
        "Road safety convex mirrors"
      ],
      "formula": "θᵢ = θᵣ   |   Mirror equation: 1/f = 1/v + 1/u"
    },
    "questions": {
      "mcq": [
        {
          "text": "A ray hits a mirror at 40° to the normal. What is the angle of reflection?",
          "options": [
            "A. 80°",
            "B. 40°",
            "C. 50°",
            "D. 140°"
          ],
          "correctIndex": 1,
          "explanation": "Law of reflection: angle of incidence = angle of reflection = 40°"
        },
        {
          "text": "Car side mirrors are convex. Why?",
          "options": [
            "A. To magnify objects",
            "B. To provide a wider field of view",
            "C. To make objects appear closer",
            "D. To reduce glare"
          ],
          "correctIndex": 1,
          "explanation": "Convex mirrors diverge light rays, giving a wide field of view — ideal for checking blind spots."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Optics",
          "pct": 50
        },
        {
          "label": "Mathematics",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "A plane mirror does not flip left/right — it swaps front/back. 'Left-right reversal' is a cognitive illusion.",
        "Virtual images in mirrors cannot be projected onto a screen but are real to the observer."
      ],
      "hook": "Kaleidoscopes, periscopes, retroreflectors on road signs, and telescope mirrors all exploit the same principle — the law of reflection.",
      "khanLinks": [
        {
          "title": "Concave Mirror Reflection",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/mirrors/v/concave-mirrors"
        },
        {
          "title": "Mirrors (Geometric Optics)",
          "url": "https://www.khanacademy.org/science/physics/geometric-optics/mirrors"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Mirror type",
        "Object dist u (cm)",
        "Image dist v (cm)",
        "Image type (R/V)",
        "Magnification m",
        "f from equation (cm)"
      ],
      "rows": 5
    },
    "observations": [
      "Describe differences between plane, concave, and convex mirror images:",
      "At what object distance did the concave mirror produce a same-size image?"
    ],
    "conclusion": "State the mirror equation. Compare focal lengths of concave and convex mirrors:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Mirrors</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>θᵢ = θᵣ &nbsp;&nbsp;|&nbsp;&nbsp; Mirror equation: 1/f = 1/v + 1/u</div>Law of reflection: angle of incidence = angle of reflection (both measured from normal).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ A plane mirror does not flip left/right — it swaps front/back. 'Left-right reversal' is a cognitive illusion.</li><li>❌ Virtual images in mirrors cannot be projected onto a screen but are real to the observer.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Car rear-view mirrors (convex = wide view)</li><li>🌍 Dental examination mirrors (concave = magnified)</li><li>🌍 Telescope primary mirror</li><li>🌍 Road safety convex mirrors</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: 1/f = 1/v + 1/u (sign convention: real=positive for mirrors). Plane mirror: v=-u (virtual). Concave f>0; Convex f<0.<br><br>Concave f=10cm: u=20cm → v=20cm (real, inverted). u=5cm → v=-10cm (virtual, upright, 2×magnified).",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Kaleidoscopes, periscopes, retroreflectors on road signs, and telescope mirrors all exploit the same principle — the law of reflection.</em><br><br>Key concepts to emphasise: Law of reflection: angle of incidence = angle of reflection (both measured from normal).; Plane mirror: virtual, upright, same-size image at same distance behind mirror.",
        "hook": "Engaging hook for students: <blockquote>Kaleidoscopes, periscopes, retroreflectors on road signs, and telescope mirrors all exploit the same principle — the law of reflection.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "1/f = 1/v + 1/u (sign convention: real=positive for mirrors). Plane mirror: v=-u (virtual). Concave f>0; Convex f<0.",
      "expected": "Concave f=10cm: u=20cm → v=20cm (real, inverted). u=5cm → v=-10cm (virtual, upright, 2×magnified)."
    }
  },
  {
    "num": 37,
    "title": "Attractive and repulsive Magnetic force",
    "section": "Magnetism",
    "desc": "Measures attractive and repulsive forces between permanent magnet poles.",
    "setupTime": "3 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Measures attractive and repulsive forces between permanent magnet poles.",
      "instructions": [
        "How did the force change as you moved magnets closer together?",
        "What happened when you reversed one magnet? Describe the change from attraction to repulsion:",
        "State the law of magnetic poles. How does distance affect magnetic force?"
      ],
      "expectedOutcome": "Like poles repel, unlike attract. F ∝ 1/d². Breaking magnet creates two full N-S magnets, not isolated poles. Force doubles when distance halved (inverse square law). N-N and S-S repel; N-S attracts."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "Bar magnets x2"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "📋",
          "name": "Observation table"
        },
        {
          "emoji": "🧵",
          "name": "String for hanging"
        }
      ],
      "observationsToRecord": [
        "How did the force change as you moved magnets closer together?",
        "What happened when you reversed one magnet? Describe the change from attraction to repulsion:"
      ],
      "theoryPoints": [
        "Like poles repel; unlike poles attract — magnetic force is a non-contact force.",
        "Magnetic field lines: point from N to S outside, never cross, density indicates strength.",
        "Earth has a magnetic field; compass needles align with it (geographic N ≠ magnetic N)."
      ],
      "realWorldConnections": [
        "Compass navigation",
        "Fridge magnets",
        "MRI machines (powerful magnetic fields)",
        "Maglev trains"
      ],
      "formula": "F = qv × B    (force on moving charge in field B)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two north poles face each other. They will:",
          "options": [
            "A. Attract",
            "B. Repel",
            "C. Have no effect",
            "D. Cancel out"
          ],
          "correctIndex": 1,
          "explanation": "Like poles (N-N or S-S) always repel each other."
        },
        {
          "text": "What happens if you cut a bar magnet in half?",
          "options": [
            "A. One piece has only N, other only S",
            "B. Both pieces become full N-S magnets",
            "C. Both pieces lose magnetism",
            "D. One piece is stronger"
          ],
          "correctIndex": 1,
          "explanation": "Magnetism comes from aligned electron spins — cutting creates two complete magnets, each with N and S poles."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Magnetism",
          "pct": 55
        },
        {
          "label": "Forces & Motion",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 5
        }
      ],
      "misconceptions": [
        "Magnets don't 'attract iron' — they induce temporary magnetism in iron, then attract the induced magnet.",
        "Breaking a magnet in half creates two smaller magnets — you cannot isolate a magnetic monopole."
      ],
      "hook": "Two fridge magnets repel before they touch — invisible fields reaching across empty space. Faraday visualised these fields as 'lines of force' and revolutionised physics.",
      "khanLinks": [
        {
          "title": "Magnets & Magnetic Force",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        },
        {
          "title": "Magnetic Forces & Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Pole configuration",
        "Distance d (cm)",
        "Force qualitative",
        "Attract/Repel",
        "Notes"
      ],
      "rows": 4
    },
    "observations": [
      "How did the force change as you moved magnets closer together?",
      "What happened when you reversed one magnet? Describe the change from attraction to repulsion:"
    ],
    "conclusion": "State the law of magnetic poles. How does distance affect magnetic force?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Attractive and repulsive Magnetic force</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 3 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>F = qv × B &nbsp;&nbsp; (force on moving charge in field B)</div>Like poles repel; unlike poles attract — magnetic force is a non-contact force.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Magnets don't 'attract iron' — they induce temporary magnetism in iron, then attract the induced magnet.</li><li>❌ Breaking a magnet in half creates two smaller magnets — you cannot isolate a magnetic monopole.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Compass navigation</li><li>🌍 Fridge magnets</li><li>🌍 MRI machines (powerful magnetic fields)</li><li>🌍 Maglev trains</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Like poles repel, unlike attract. F ∝ 1/d². Breaking magnet creates two full N-S magnets, not isolated poles.<br><br>Force doubles when distance halved (inverse square law). N-N and S-S repel; N-S attracts.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Two fridge magnets repel before they touch — invisible fields reaching across empty space. Faraday visualised these fields as 'lines of force' and revolutionised physics.</em><br><br>Key concepts to emphasise: Like poles repel; unlike poles attract — magnetic force is a non-contact force.; Magnetic field lines: point from N to S outside, never cross, density indicates strength.",
        "hook": "Engaging hook for students: <blockquote>Two fridge magnets repel before they touch — invisible fields reaching across empty space. Faraday visualised these fields as 'lines of force' and revolutionised physics.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Like poles repel, unlike attract. F ∝ 1/d². Breaking magnet creates two full N-S magnets, not isolated poles.",
      "expected": "Force doubles when distance halved (inverse square law). N-N and S-S repel; N-S attracts."
    }
  },
  {
    "num": 38,
    "title": "Magnetic Field Forces",
    "section": "Magnetism",
    "desc": "Demonstrates the force on a current-carrying conductor in a magnetic field.",
    "setupTime": "5 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Demonstrates the force on a current-carrying conductor in a magnetic field.",
      "instructions": [
        "How did reversing the current direction affect the force?",
        "Describe how to use Fleming's Left-Hand Rule to predict the force direction:",
        "State F = BIL. Describe two applications that use the motor effect:"
      ],
      "expectedOutcome": "F = BIL sinθ. Perpendicular current/field gives maximum force. Use left hand: First finger=B, Second=I, Thumb=Force. Reverse current → reverse force. Increase I → increase F proportionally. F=0 when current parallel to field."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "U-magnet"
        },
        {
          "emoji": "⚡",
          "name": "DC power supply"
        },
        {
          "emoji": "🔌",
          "name": "Wire"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "⚖️",
          "name": "Current balance"
        }
      ],
      "observationsToRecord": [
        "How did reversing the current direction affect the force?",
        "Describe how to use Fleming's Left-Hand Rule to predict the force direction:"
      ],
      "theoryPoints": [
        "A current-carrying conductor in a magnetic field experiences a force (motor effect).",
        "Force F = BIL (B=field strength, I=current, L=wire length in field).",
        "Direction given by Fleming's Left-Hand Rule (or F = IL × B vector cross product)."
      ],
      "realWorldConnections": [
        "Electric motors (force on current loop)",
        "Galvanometers (measuring current)",
        "Loudspeakers (voice coil in magnetic field)",
        "Rail guns"
      ],
      "formula": "F = B·I·L·sinθ   |   Fleming's Left-Hand Rule"
    },
    "questions": {
      "mcq": [
        {
          "text": "F = BIL. A wire carries 2A in a 0.5T field over 10cm. Force = ?",
          "options": [
            "A. 10 N",
            "B. 0.1 N",
            "C. 1 N",
            "D. 0.01 N"
          ],
          "correctIndex": 1,
          "explanation": "F = BIL = 0.5 × 2 × 0.1 = 0.1 N"
        },
        {
          "text": "When is the force on a current in a magnetic field maximum?",
          "options": [
            "A. When parallel to field",
            "B. When perpendicular to field",
            "C. When at 45° to field",
            "D. Always the same"
          ],
          "correctIndex": 1,
          "explanation": "F = BIL sinθ — maximum when θ = 90° (perpendicular), giving F = BIL."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Magnetism",
          "pct": 50
        },
        {
          "label": "Electricity",
          "pct": 25
        },
        {
          "label": "Forces & Motion",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "The force is perpendicular to BOTH the current direction AND the field — not along either one.",
        "Zero force when current is parallel to field (sinθ = 0); maximum when perpendicular."
      ],
      "hook": "An electric current creates a magnetic field — Oersted discovered this by accident when his compass deflected near a wire. It led directly to the electric motor.",
      "khanLinks": [
        {
          "title": "Force on a Current-Carrying Wire",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/electric-motors/v/the-magnetic-force-on-a-current-carrying-wire"
        },
        {
          "title": "Magnetic Forces & Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Current I (A)",
        "Field B (estimate)",
        "Wire length in field (cm)",
        "Force direction",
        "Force qualitative",
        "Notes"
      ],
      "rows": 4
    },
    "observations": [
      "How did reversing the current direction affect the force?",
      "Describe how to use Fleming's Left-Hand Rule to predict the force direction:"
    ],
    "conclusion": "State F = BIL. Describe two applications that use the motor effect:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Magnetic Field Forces</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 5 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>F = B·I·L·sinθ &nbsp;&nbsp;|&nbsp;&nbsp; Fleming's Left-Hand Rule</div>A current-carrying conductor in a magnetic field experiences a force (motor effect).",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ The force is perpendicular to BOTH the current direction AND the field — not along either one.</li><li>❌ Zero force when current is parallel to field (sinθ = 0); maximum when perpendicular.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Electric motors (force on current loop)</li><li>🌍 Galvanometers (measuring current)</li><li>🌍 Loudspeakers (voice coil in magnetic field)</li><li>🌍 Rail guns</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: F = BIL sinθ. Perpendicular current/field gives maximum force. Use left hand: First finger=B, Second=I, Thumb=Force.<br><br>Reverse current → reverse force. Increase I → increase F proportionally. F=0 when current parallel to field.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>An electric current creates a magnetic field — Oersted discovered this by accident when his compass deflected near a wire. It led directly to the electric motor.</em><br><br>Key concepts to emphasise: A current-carrying conductor in a magnetic field experiences a force (motor effect).; Force F = BIL (B=field strength, I=current, L=wire length in field).",
        "hook": "Engaging hook for students: <blockquote>An electric current creates a magnetic field — Oersted discovered this by accident when his compass deflected near a wire. It led directly to the electric motor.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "F = BIL sinθ. Perpendicular current/field gives maximum force. Use left hand: First finger=B, Second=I, Thumb=Force.",
      "expected": "Reverse current → reverse force. Increase I → increase F proportionally. F=0 when current parallel to field."
    }
  },
  {
    "num": 39,
    "title": "Compass and Magnetism",
    "section": "Magnetism",
    "desc": "Uses a compass to map Earth's magnetic field and measure magnetic declination.",
    "setupTime": "2 min",
    "duration": "15 min",
    "summary": {
      "whatTheyLearn": "Uses a compass to map Earth's magnetic field and measure magnetic declination.",
      "instructions": [
        "Did the compass point exactly to geographic north? Describe any difference:",
        "What happened when you placed a magnet near the compass?",
        "Explain magnetic declination. Why does compass point to magnetic, not geographic, north?"
      ],
      "expectedOutcome": "Declination varies by location. Earth's magnetic south pole is near geographic north. Compass N-pole attracted to it. Italy declination ≈ 2-3°E. Nearby ferromagnetic materials cause local deflection."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧭",
          "name": "Compass"
        },
        {
          "emoji": "🧲",
          "name": "Bar magnet"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "🖊️",
          "name": "Paper for field mapping"
        }
      ],
      "observationsToRecord": [
        "Did the compass point exactly to geographic north? Describe any difference:",
        "What happened when you placed a magnet near the compass?"
      ],
      "theoryPoints": [
        "A compass needle is a small permanent magnet that aligns with Earth's magnetic field.",
        "Earth's geographic north pole is near a magnetic south pole (field lines enter there).",
        "Magnetic declination: the angle between geographic and magnetic north — varies by location."
      ],
      "realWorldConnections": [
        "Navigation (ship/hiking compass)",
        "Geophysical prospecting",
        "Bird migration (magnetoreception)",
        "Magnetic anomaly detection"
      ],
      "formula": "Compass aligns with B_Earth   |   Declination varies ±30° globally"
    },
    "questions": {
      "mcq": [
        {
          "text": "A compass needle points north. Which pole of the needle points north?",
          "options": [
            "A. South pole of needle",
            "B. North pole of needle",
            "C. Either, depending on hemisphere",
            "D. It rotates randomly"
          ],
          "correctIndex": 1,
          "explanation": "The north-seeking pole (N pole) of the needle points toward geographic north (Earth's magnetic south)."
        },
        {
          "text": "Magnetic declination in your city is 5°W. True north is:",
          "options": [
            "A. 5° east of compass north",
            "B. 5° west of compass north",
            "C. Same as compass north",
            "D. Variable"
          ],
          "correctIndex": 0,
          "explanation": "If declination is 5°W, compass points 5° west of true north, so true north is 5° east of compass reading."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Magnetism",
          "pct": 55
        },
        {
          "label": "Measurement",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 5
        }
      ],
      "misconceptions": [
        "A compass points to magnetic north, NOT geographic north — the difference (declination) matters for precise navigation.",
        "The compass needle's 'north' pole points north because it's attracted to Earth's magnetic south pole there."
      ],
      "hook": "Vikings navigated across the Atlantic using a 'sunstone' — a calcite crystal that polarises light to locate the sun on cloudy days. Magnetism plus optics in the 9th century.",
      "khanLinks": [
        {
          "title": "Magnets & Magnetic Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        },
        {
          "title": "Magnetic Forces & Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Location",
        "Compass direction",
        "True North direction",
        "Declination (°)",
        "Notes"
      ],
      "rows": 4
    },
    "observations": [
      "Did the compass point exactly to geographic north? Describe any difference:",
      "What happened when you placed a magnet near the compass?"
    ],
    "conclusion": "Explain magnetic declination. Why does compass point to magnetic, not geographic, north?",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Compass and Magnetism</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 2 min setup + 15 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Compass aligns with B_Earth &nbsp;&nbsp;|&nbsp;&nbsp; Declination varies ±30° globally</div>A compass needle is a small permanent magnet that aligns with Earth's magnetic field.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ A compass points to magnetic north, NOT geographic north — the difference (declination) matters for precise navigation.</li><li>❌ The compass needle's 'north' pole points north because it's attracted to Earth's magnetic south pole there.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Navigation (ship/hiking compass)</li><li>🌍 Geophysical prospecting</li><li>🌍 Bird migration (magnetoreception)</li><li>🌍 Magnetic anomaly detection</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Declination varies by location. Earth's magnetic south pole is near geographic north. Compass N-pole attracted to it.<br><br>Italy declination ≈ 2-3°E. Nearby ferromagnetic materials cause local deflection.",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Vikings navigated across the Atlantic using a 'sunstone' — a calcite crystal that polarises light to locate the sun on cloudy days. Magnetism plus optics in the 9th century.</em><br><br>Key concepts to emphasise: A compass needle is a small permanent magnet that aligns with Earth's magnetic field.; Earth's geographic north pole is near a magnetic south pole (field lines enter there).",
        "hook": "Engaging hook for students: <blockquote>Vikings navigated across the Atlantic using a 'sunstone' — a calcite crystal that polarises light to locate the sun on cloudy days. Magnetism plus optics in the 9th century.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Declination varies by location. Earth's magnetic south pole is near geographic north. Compass N-pole attracted to it.",
      "expected": "Italy declination ≈ 2-3°E. Nearby ferromagnetic materials cause local deflection."
    }
  },
  {
    "num": 40,
    "title": "A Fairly Common Magnetic Toy",
    "section": "Magnetism",
    "desc": "Explores constrained magnetic levitation and Earnshaw's Theorem.",
    "setupTime": "3 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Explores constrained magnetic levitation and Earnshaw's Theorem.",
      "instructions": [
        "Can you achieve stable levitation with only permanent magnets? Describe what happened:",
        "What constraint was needed to maintain any levitation?",
        "State Earnshaw's Theorem in your own words. Explain why a constraining rod is needed:"
      ],
      "expectedOutcome": "Earnshaw's Theorem: stable static levitation impossible with permanent magnets in all 3D directions. Constraint eliminates one degree of freedom. Ring magnets on rod can levitate when constrained laterally. Without rod: unstable (flips or slides away)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "🧲",
          "name": "Ring magnets"
        },
        {
          "emoji": "🔩",
          "name": "Wooden rod"
        },
        {
          "emoji": "📏",
          "name": "Ruler"
        },
        {
          "emoji": "📋",
          "name": "Observation sheet"
        }
      ],
      "observationsToRecord": [
        "Can you achieve stable levitation with only permanent magnets? Describe what happened:",
        "What constraint was needed to maintain any levitation?"
      ],
      "theoryPoints": [
        "Stable magnetic levitation using permanent magnets alone is impossible by Earnshaw's Theorem.",
        "Unstable levitation requires a constraint (ring magnet on a rod).",
        "Superconductors allow perfect diamagnetic levitation (Meissner effect)."
      ],
      "realWorldConnections": [
        "Maglev trains (superconducting)",
        "Magnetic bearings in hard drives",
        "Contactless charging pads (inductive coupling)",
        "Levitating toys (constrained magnets)"
      ],
      "formula": "Earnshaw's Theorem: stable 3D levitation impossible with static fields alone"
    },
    "questions": {
      "mcq": [
        {
          "text": "Earnshaw's Theorem states that:",
          "options": [
            "A. Magnets always attract",
            "B. Stable levitation with only static fields is impossible",
            "C. Magnetic fields can be shielded completely",
            "D. Like poles repel"
          ],
          "correctIndex": 1,
          "explanation": "Earnshaw's Theorem proves that a collection of static charges/magnets cannot be in stable equilibrium."
        },
        {
          "text": "The Meissner effect in superconductors causes:",
          "options": [
            "A. Strong attraction to magnets",
            "B. Complete expulsion of magnetic fields (perfect levitation)",
            "C. Increased resistance",
            "D. Heat generation"
          ],
          "correctIndex": 1,
          "explanation": "Below critical temperature, superconductors expel all magnetic flux — enabling perfect diamagnetic levitation."
        }
      ],
      "discussion": [
        "What is the main physics principle demonstrated?",
        "What are the main sources of error?",
        "How does this apply to real-world technology?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Magnetism",
          "pct": 50
        },
        {
          "label": "Forces & Motion",
          "pct": 25
        },
        {
          "label": "Scientific Method",
          "pct": 15
        },
        {
          "label": "Real-World Apps",
          "pct": 10
        }
      ],
      "misconceptions": [
        "You cannot levitate a magnet with only static permanent magnets in 3D — Earnshaw's theorem forbids it.",
        "Maglev trains use electromagnets (controllable) or superconductors, not simple permanent magnets."
      ],
      "hook": "Magnetic levitation isn't science fiction — maglev trains in Japan travel at 600 km/h using superconducting magnets. The physics starts with two magnets repelling.",
      "khanLinks": [
        {
          "title": "Magnetic Forces & Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields"
        },
        {
          "title": "Magnets & Magnetic Fields",
          "url": "https://www.khanacademy.org/science/physics/magnetic-forces-and-magnetic-fields/magnets-magnetic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Configuration",
        "Observation",
        "Stable? (Y/N)",
        "Explanation"
      ],
      "rows": 4
    },
    "observations": [
      "Can you achieve stable levitation with only permanent magnets? Describe what happened:",
      "What constraint was needed to maintain any levitation?"
    ],
    "conclusion": "State Earnshaw's Theorem in your own words. Explain why a constraining rod is needed:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>A Fairly Common Magnetic Toy</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Read experiment instructions thoroughly before class</li><li>Test all equipment works correctly</li><li>Prepare data tables on whiteboard</li></ol>Time needed: 3 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Rushing through setup without calibration</li><li>Recording data without units</li><li>Not repeating measurements for reliability</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Earnshaw's Theorem: stable 3D levitation impossible with static fields alone</div>Stable magnetic levitation using permanent magnets alone is impossible by Earnshaw's Theorem.",
        "question": "Discussion questions for students:<ul><li>What is the main physics principle demonstrated?</li><li>What are the main sources of error?</li><li>How does this apply to real-world technology?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ You cannot levitate a magnet with only static permanent magnets in 3D — Earnshaw's theorem forbids it.</li><li>❌ Maglev trains use electromagnets (controllable) or superconductors, not simple permanent magnets.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Maglev trains (superconducting)</li><li>🌍 Magnetic bearings in hard drives</li><li>🌍 Contactless charging pads (inductive coupling)</li><li>🌍 Levitating toys (constrained magnets)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Earnshaw's Theorem: stable static levitation impossible with permanent magnets in all 3D directions. Constraint eliminates one degree of freedom.<br><br>Ring magnets on rod can levitate when constrained laterally. Without rod: unstable (flips or slides away).",
        "extend": "Extension activity: Ask students to suggest improvements to the experimental method.",
        "explain": "Here's how to explain this to students: <em>Magnetic levitation isn't science fiction — maglev trains in Japan travel at 600 km/h using superconducting magnets. The physics starts with two magnets repelling.</em><br><br>Key concepts to emphasise: Stable magnetic levitation using permanent magnets alone is impossible by Earnshaw's Theorem.; Unstable levitation requires a constraint (ring magnet on a rod).",
        "hook": "Engaging hook for students: <blockquote>Magnetic levitation isn't science fiction — maglev trains in Japan travel at 600 km/h using superconducting magnets. The physics starts with two magnets repelling.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Earnshaw's Theorem: stable static levitation impossible with permanent magnets in all 3D directions. Constraint eliminates one degree of freedom.",
      "expected": "Ring magnets on rod can levitate when constrained laterally. Without rod: unstable (flips or slides away)."
    }
  },
  {
    "num": 41,
    "title": "Electric Resistance",
    "section": "Electricity",
    "desc": "Verifies Ohm's Law (V = IR) across resistors and non-ohmic components.",
    "setupTime": "8 min",
    "duration": "20 min",
    "summary": {
      "whatTheyLearn": "Verifies Ohm's Law (V = IR) across resistors and non-ohmic components.",
      "instructions": [
        "Plot V vs I. Was the graph linear? What does linearity indicate?",
        "Which components did NOT follow Ohm's Law? How could you tell?",
        "State Ohm's Law. Calculate the resistance of each component from V/I. Identify ohmic vs non-ohmic components:"
      ],
      "expectedOutcome": "Ohmic: R constant (straight V-I graph). Non-ohmic: R varies (LED, bulb filament). Use V=IR. Check against colour-coded values. 220Ω resistor: V=2.2V, I=10mA → R=220Ω. LED: non-linear (V-I curve shows threshold ~2V)."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚡",
          "name": "Power supply"
        },
        {
          "emoji": "🔌",
          "name": "Resistors (various)"
        },
        {
          "emoji": "⚡",
          "name": "Ammeter"
        },
        {
          "emoji": "⚡",
          "name": "Voltmeter"
        },
        {
          "emoji": "🔌",
          "name": "Connecting wires"
        }
      ],
      "observationsToRecord": [
        "Plot V vs I. Was the graph linear? What does linearity indicate?",
        "Which components did NOT follow Ohm's Law? How could you tell?"
      ],
      "theoryPoints": [
        "Ohm's Law: V = IR. Voltage drives current through resistance.",
        "Resistance R = ρL/A — depends on material (ρ), length, and cross-section.",
        "Conductors (low R), insulators (very high R), semiconductors (variable R)."
      ],
      "realWorldConnections": [
        "Fuses (high R wire melts at excess current)",
        "LED current limiting resistors",
        "Heating elements (intentional high resistance)",
        "Superconductors (R = 0)"
      ],
      "formula": "V = IR   |   P = IV = I²R = V²/R"
    },
    "questions": {
      "mcq": [
        {
          "text": "A 12V battery drives current through 4Ω resistance. Current = ?",
          "options": [
            "A. 48 A",
            "B. 3 A",
            "C. 0.33 A",
            "D. 8 A"
          ],
          "correctIndex": 1,
          "explanation": "I = V/R = 12/4 = 3 A"
        },
        {
          "text": "A 3A current flows through 6Ω for 10 seconds. Energy dissipated?",
          "options": [
            "A. 18 J",
            "B. 540 J",
            "C. 60 J",
            "D. 180 J"
          ],
          "correctIndex": 1,
          "explanation": "P = I²R = 9×6 = 54W; E = P×t = 54×10 = 540 J"
        }
      ],
      "discussion": [
        "Why do wires heat up? What determines how much?",
        "Why must fuses have lower resistance than the devices they protect?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Electricity",
          "pct": 50
        },
        {
          "label": "Mathematics",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Current is NOT used up in a circuit — the same current flows through all components in series.",
        "Voltage is the energy per charge (J/C), not the 'amount' of electricity."
      ],
      "hook": "Ohm's law was discovered by Georg Ohm in 1827 — he was ridiculed at first. Today it underlies every electronic device ever made.",
      "khanLinks": [
        {
          "title": "Circuits & Ohm's Law",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/circuits-part-1"
        },
        {
          "title": "Electricity & Circuits",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Resistor/Component",
        "Voltage V (V)",
        "Current I (mA)",
        "I (A)",
        "Resistance R = V/I (Ω)",
        "Expected R (Ω)",
        "% Error"
      ],
      "rows": 5
    },
    "observations": [
      "Plot V vs I. Was the graph linear? What does linearity indicate?",
      "Which components did NOT follow Ohm's Law? How could you tell?"
    ],
    "conclusion": "State Ohm's Law. Calculate the resistance of each component from V/I. Identify ohmic vs non-ohmic components:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Electric Resistance</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Pre-wire circuit boards</li><li>Test all resistors with multimeter beforehand</li><li>Demonstrate proper use of ammeter (in series) and voltmeter (in parallel)</li></ol>Time needed: 8 min setup + 20 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Connecting ammeter in parallel (shorts circuit)</li><li>Connecting voltmeter in series (no current)</li><li>Not accounting for internal resistance of battery</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>V = IR &nbsp;&nbsp;|&nbsp;&nbsp; P = IV = I²R = V²/R</div>Ohm's Law: V = IR. Voltage drives current through resistance.",
        "question": "Discussion questions for students:<ul><li>Why do wires heat up? What determines how much?</li><li>Why must fuses have lower resistance than the devices they protect?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Current is NOT used up in a circuit — the same current flows through all components in series.</li><li>❌ Voltage is the energy per charge (J/C), not the 'amount' of electricity.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Fuses (high R wire melts at excess current)</li><li>🌍 LED current limiting resistors</li><li>🌍 Heating elements (intentional high resistance)</li><li>🌍 Superconductors (R = 0)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Ohmic: R constant (straight V-I graph). Non-ohmic: R varies (LED, bulb filament). Use V=IR. Check against colour-coded values.<br><br>220Ω resistor: V=2.2V, I=10mA → R=220Ω. LED: non-linear (V-I curve shows threshold ~2V).",
        "extend": "Extension activity: Measure I-V curve of LED to show non-ohmic behaviour.",
        "explain": "Here's how to explain this to students: <em>Ohm's law was discovered by Georg Ohm in 1827 — he was ridiculed at first. Today it underlies every electronic device ever made.</em><br><br>Key concepts to emphasise: Ohm's Law: V = IR. Voltage drives current through resistance.; Resistance R = ρL/A — depends on material (ρ), length, and cross-section.",
        "hook": "Engaging hook for students: <blockquote>Ohm's law was discovered by Georg Ohm in 1827 — he was ridiculed at first. Today it underlies every electronic device ever made.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Ohmic: R constant (straight V-I graph). Non-ohmic: R varies (LED, bulb filament). Use V=IR. Check against colour-coded values.",
      "expected": "220Ω resistor: V=2.2V, I=10mA → R=220Ω. LED: non-linear (V-I curve shows threshold ~2V)."
    }
  },
  {
    "num": 42,
    "title": "Series versus parallel circuits",
    "section": "Electricity",
    "desc": "Compares total resistance and current distribution in series vs parallel circuits.",
    "setupTime": "8 min",
    "duration": "25 min",
    "summary": {
      "whatTheyLearn": "Compares total resistance and current distribution in series vs parallel circuits.",
      "instructions": [
        "What happened to total current when you added a resistor in series vs parallel?",
        "Compare voltage across components in each circuit type:",
        "State formulas for series and parallel resistance. Explain why home circuits use parallel wiring:"
      ],
      "expectedOutcome": "Series: R_T = R₁+R₂. Parallel: 1/R_T = 1/R₁+1/R₂. Parallel R_T < smallest R. Series R_T > largest R. R₁=100Ω, R₂=100Ω: Series→200Ω; Parallel→50Ω. Home circuits: parallel so each device gets full 230V."
    },
    "experiment": {
      "equipment": [
        {
          "emoji": "⚡",
          "name": "Power supply"
        },
        {
          "emoji": "🔌",
          "name": "Resistors x2"
        },
        {
          "emoji": "⚡",
          "name": "Ammeter"
        },
        {
          "emoji": "⚡",
          "name": "Voltmeter"
        },
        {
          "emoji": "🔌",
          "name": "Connecting wires"
        },
        {
          "emoji": "📋",
          "name": "Circuit diagram"
        }
      ],
      "observationsToRecord": [
        "What happened to total current when you added a resistor in series vs parallel?",
        "Compare voltage across components in each circuit type:"
      ],
      "theoryPoints": [
        "Series circuit: same current everywhere, voltages add up, total R = R₁+R₂+...",
        "Parallel circuit: same voltage across all branches, currents add up, 1/R_total = Σ(1/Rᵢ).",
        "Parallel resistance is always LESS than the smallest individual resistance."
      ],
      "realWorldConnections": [
        "Home electrical circuits (parallel)",
        "Christmas lights (series — one fails, all fail)",
        "Car battery + starter motor + accessories (parallel)"
      ],
      "formula": "Series: R_T = ΣRᵢ   |   Parallel: 1/R_T = Σ(1/Rᵢ)"
    },
    "questions": {
      "mcq": [
        {
          "text": "Two 10Ω resistors in parallel. Total resistance?",
          "options": [
            "A. 20Ω",
            "B. 10Ω",
            "C. 5Ω",
            "D. 100Ω"
          ],
          "correctIndex": 2,
          "explanation": "1/R = 1/10+1/10 = 2/10; R = 5Ω (parallel always reduces resistance)"
        },
        {
          "text": "In a series circuit with 12V and R₁=2Ω, R₂=4Ω, what is the voltage across R₂?",
          "options": [
            "A. 4V",
            "B. 8V",
            "C. 6V",
            "D. 12V"
          ],
          "correctIndex": 1,
          "explanation": "I = V/R_total = 12/6 = 2A; V_R2 = I×R₂ = 2×4 = 8V"
        }
      ],
      "discussion": [
        "Why do Christmas lights go dark when one bulb fails?",
        "Why does plugging in many appliances trip a circuit breaker?"
      ]
    },
    "overview": {
      "conceptBreakdown": [
        {
          "label": "Electricity",
          "pct": 50
        },
        {
          "label": "Mathematics",
          "pct": 25
        },
        {
          "label": "Data Analysis",
          "pct": 15
        },
        {
          "label": "Scientific Method",
          "pct": 10
        }
      ],
      "misconceptions": [
        "Adding more resistors in parallel REDUCES total resistance — more paths = less resistance.",
        "In a series circuit, removing one component breaks the entire circuit — all elements share one path."
      ],
      "hook": "Your home is wired in parallel — so each appliance gets full voltage and switching one off doesn't affect the others. Series wiring would mean your whole house goes dark if one bulb blows.",
      "khanLinks": [
        {
          "title": "Series and Parallel Resistors",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic/circuits-resistance/v/series-resistors"
        },
        {
          "title": "Electricity & Circuits",
          "url": "https://www.khanacademy.org/science/physics/circuits-topic"
        }
      ]
    },
    "dataTable": {
      "headers": [
        "#",
        "Circuit type",
        "R₁ (Ω)",
        "R₂ (Ω)",
        "R_total measured (Ω)",
        "R_total calculated (Ω)",
        "V_supply (V)",
        "I_total (mA)",
        "% Error"
      ],
      "rows": 4
    },
    "observations": [
      "What happened to total current when you added a resistor in series vs parallel?",
      "Compare voltage across components in each circuit type:"
    ],
    "conclusion": "State formulas for series and parallel resistance. Explain why home circuits use parallel wiring:",
    "ai": {
      "opening": "Hi! I'm Gali, your AI lab assistant. I'm here to help with <strong>Series versus parallel circuits</strong>. Ask me about the setup, formulas, expected results, or how to explain this topic to students.",
      "keywords": {
        "setup": "To set up this experiment: <ol><li>Prepare identical resistors for fair comparison</li><li>Pre-build demonstration boards</li><li>Have multimeters ready for current/voltage measurement</li></ol>Time needed: 8 min setup + 25 min experiment.",
        "error": "Common student errors in this experiment:<ul><li>Forgetting that adding parallel resistors REDUCES total resistance</li><li>Not measuring total current vs branch currents</li><li>Poor connections causing variable resistance</li></ul>Tip: Address these at the <strong>start</strong> of the session.",
        "formula": "The key formula is: <div class='chat-formula'>Series: R_T = ΣRᵢ &nbsp;&nbsp;|&nbsp;&nbsp; Parallel: 1/R_T = Σ(1/Rᵢ)</div>Series circuit: same current everywhere, voltages add up, total R = R₁+R₂+...",
        "question": "Discussion questions for students:<ul><li>Why do Christmas lights go dark when one bulb fails?</li><li>Why does plugging in many appliances trip a circuit breaker?</li></ul>",
        "misconception": "Students commonly misunderstand:<ul><li>❌ Adding more resistors in parallel REDUCES total resistance — more paths = less resistance.</li><li>❌ In a series circuit, removing one component breaks the entire circuit — all elements share one path.</li></ul>Address these explicitly before the experiment.",
        "real": "Real-world connections: <ul><li>🌍 Home electrical circuits (parallel)</li><li>🌍 Christmas lights (series — one fails, all fail)</li><li>🌍 Car battery + starter motor + accessories (parallel)</li></ul>Starting with these examples increases student motivation.",
        "result": "Expected results: Series: R_T = R₁+R₂. Parallel: 1/R_T = 1/R₁+1/R₂. Parallel R_T < smallest R. Series R_T > largest R.<br><br>R₁=100Ω, R₂=100Ω: Series→200Ω; Parallel→50Ω. Home circuits: parallel so each device gets full 230V.",
        "extend": "Extension activity: Calculate power dissipated in each configuration.",
        "explain": "Here's how to explain this to students: <em>Your home is wired in parallel — so each appliance gets full voltage and switching one off doesn't affect the others. Series wiring would mean your whole house goes dark if one bulb blows.</em><br><br>Key concepts to emphasise: Series circuit: same current everywhere, voltages add up, total R = R₁+R₂+...; Parallel circuit: same voltage across all branches, currents add up, 1/R_total = Σ(1/Rᵢ).",
        "hook": "Engaging hook for students: <blockquote>Your home is wired in parallel — so each appliance gets full voltage and switching one off doesn't affect the others. Series wiring would mean your whole house goes dark if one bulb blows.</blockquote>This works well as an opener before students touch the equipment."
      },
      "hint": "Series: R_T = R₁+R₂. Parallel: 1/R_T = 1/R₁+1/R₂. Parallel R_T < smallest R. Series R_T > largest R.",
      "expected": "R₁=100Ω, R₂=100Ω: Series→200Ω; Parallel→50Ω. Home circuits: parallel so each device gets full 230V."
    }
  }
];